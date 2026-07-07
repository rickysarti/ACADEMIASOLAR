import { createClient } from "@supabase/supabase-js"

// Proyecto Supabase "SolarPower" compartido con el resto del ecosistema.
// La anon key es la clave publica protegida por RLS (Row Level Security):
// solo permite leer posts con estado = 'publicado'. Se puede sobreescribir
// con variables de entorno si el proyecto Supabase cambia.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ddocohkgabfhsolfarvr.supabase.co"

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkb2NvaGtnYWJmaHNvbGZhcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNjc1ODgsImV4cCI6MjA1NzY0MzU4OH0.rm4A8tPDP2_eK5gQ68qJrRl-qf5J42bHrK7SIp1c6UY"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
  },
})
