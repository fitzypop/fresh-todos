import { Head } from "$fresh/runtime.ts";
// import { Handler } from "$fresh/server.ts";
import TodoApp from "../islands/Todo.tsx";
// import { createClient } from "supabase";

// export const handler: Handler = async (_req, ctx) => {
//   const { data, error } = await supabase.from("todos").select();
//   return ctx.render({ data, error });
// };

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
