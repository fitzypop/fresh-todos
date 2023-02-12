import { createClient } from "supabase";

const { SUPABASE_URL, SUPABASE_ANON_PUBLIC_KEY } = Deno.env.toObject();
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC_KEY);
