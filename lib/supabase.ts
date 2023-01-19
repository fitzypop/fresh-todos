import { createClient } from "supabase";

const { SUPABASE_URL, SUPABASE_ANON_PUBLIC_KEY } = Deno.env.toObject();
console.log(Deno.env.get("SUPABASE_URL"));
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC_KEY);
