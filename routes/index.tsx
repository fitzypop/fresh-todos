import { Head } from "$fresh/runtime.ts";
import TodoApp from "../islands/Todo.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gotta Be Fresh Todo App</title>
      </Head>
      <TodoApp />
    </>
  );
}
