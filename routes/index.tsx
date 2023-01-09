import { Head } from "$fresh/runtime.ts";
import { Handler } from "$fresh/server.ts";
import TodoApp from "../islands/Todo.tsx";
import { createClient } from "supabase";

export const handler: Handler = (_req, ctx) => {
  const { SUPABASE_URL, SUPABASE_ANON_PUBLIC_KEY } = Deno.env.toObject();
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC_KEY);
  console.log(supabase);
  return ctx.render();
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Gotta Be Fresh Todo App</title>
      </Head>
      <main class="bg-white h-screen font-sans">
        <TodoApp />
      </main>
    </>
  );
}
