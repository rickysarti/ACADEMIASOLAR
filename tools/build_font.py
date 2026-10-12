"""Genera Academia Solar Sans a partir de Hanken Grotesk (SIL OFL 1.1).

Uso: python3 tools/build_font.py HankenGrotesk-400.ttf app/fonts/academia-solar-sans-400-normal.woff2
(requiere: pip install fonttools brotli)

Rasgo de marca: los puntos (tilde de i/j, diéresis y puntuación) se
reemplazan por "soles": círculos perfectos un 18% más grandes.
"""
import math, sys, os
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.boundsPen import BoundsPen

SRC, OUT = sys.argv[1], sys.argv[2]
FAMILY = "Academia Solar Sans"
PS_FAMILY = "AcademiaSolarSans"
SCALE = 1.18
TARGETS = ["period", "colon", "semicolon", "exclam", "question", "exclamdown", "questiondown",
           "periodcentered", "uni0307", "uni0308", "dotaccent", "dieresis", "ellipsis"]

def contours(rec):
    cur = []
    for op, args in rec.value:
        cur.append((op, args))
        if op in ("closePath", "endPath"):
            yield cur
            cur = []

def bbox(contour):
    pts = [p for op, args in contour for p in args if p is not None]
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    return min(xs), min(ys), max(xs), max(ys)

def draw_circle(pen, cx, cy, r, n=8):
    # Spline cuadrática cerrada solo con puntos fuera de curva, en sentido horario (TrueType).
    k = r / math.cos(math.pi / n)
    pts = []
    for i in range(n):
        a = -2 * math.pi * i / n + math.pi / 2
        pts.append((round(cx + k * math.cos(a)), round(cy + k * math.sin(a))))
    pen.qCurveTo(*pts, None)
    pen.closePath()

def replay(pen, contour):
    for op, args in contour:
        getattr(pen, op)(*args)

def main():
    font = TTFont(SRC)
    glyf, gs = font["glyf"], font.getGlyphSet()
    italic = bool(font["head"].macStyle & 2)
    tol = 0.5 if italic else 0.3

    ref = RecordingPen(); gs["period"].draw(ref)
    px0, py0, px1, py1 = bbox(next(contours(ref)))
    pw, ph = px1 - px0, py1 - py0

    changed = []
    for name in TARGETS:
        if name not in glyf or glyf[name].isComposite():
            continue
        rec = RecordingPen(); gs[name].draw(rec)
        pen = TTGlyphPen(gs)
        n_dots = 0
        for c in contours(rec):
            x0, y0, x1, y1 = bbox(c)
            w, h = x1 - x0, y1 - y0
            if abs(w - pw) <= tol * pw and abs(h - ph) <= tol * ph:
                r = (min(w, h) if italic else max(w, h)) / 2 * SCALE
                draw_circle(pen, (x0 + x1) / 2, (y0 + y1) / 2, r)
                n_dots += 1
            else:
                replay(pen, c)
        if n_dots:
            glyf[name] = pen.glyph()
            changed.append(f"{name}x{n_dots}")
    # Recalcular límites de los glifos tocados
    for name in TARGETS:
        if name in glyf:
            glyf[name].recalcBounds(glyf)

    # Renombrar (OFL: una versión modificada no puede usar el nombre original)
    weight = font["OS/2"].usWeightClass
    style = {400: "Regular", 500: "Medium", 600: "SemiBold", 700: "Bold"}[weight]
    if italic:
        style = "Italic" if weight == 400 else style + " Italic"
    ps_style = style.replace(" ", "")
    name = font["name"]
    copyright_ = (name.getDebugName(0) or "") + "; Modified 2026 by Academia Solar (sun dots)."
    for rec in list(name.names):
        if rec.nameID in (1, 2, 3, 4, 6, 16, 17, 21, 22, 25):
            name.removeNames(nameID=rec.nameID)
    is_ribbi = style in ("Regular", "Bold", "Italic", "Bold Italic")
    base_family = FAMILY if is_ribbi else f"{FAMILY} {style.replace(' Italic', '')}"
    name.setName(copyright_, 0, 3, 1, 0x409)
    name.setName(base_family, 1, 3, 1, 0x409)
    name.setName(style if is_ribbi else ("Italic" if italic else "Regular"), 2, 3, 1, 0x409)
    name.setName(f"{PS_FAMILY}-{ps_style};2026", 3, 3, 1, 0x409)
    name.setName(f"{FAMILY} {style}", 4, 3, 1, 0x409)
    name.setName(f"{PS_FAMILY}-{ps_style}", 6, 3, 1, 0x409)
    name.setName(FAMILY, 16, 3, 1, 0x409)
    name.setName(style, 17, 3, 1, 0x409)
    name.setName("Academia Solar. Derived from Hanken Grotesk by Alfredo Marco Pradil.", 9, 3, 1, 0x409)
    name.setName("This Font Software is licensed under the SIL Open Font License, Version 1.1.", 13, 3, 1, 0x409)
    name.setName("https://openfontlicense.org", 14, 3, 1, 0x409)
    font["head"].fontRevision = 1.0
    name.setName("Version 1.000; Academia Solar Sans", 5, 3, 1, 0x409)

    font.flavor = "woff2"
    font.save(OUT)
    print(os.path.basename(OUT), style, "->", ", ".join(changed))

main()
