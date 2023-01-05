import TodoApp from "../islands/Todo.tsx";

export interface ITodo {
  id?: string;
  text?: string;
  completed?: boolean;
}

export type ITodos = ITodo[];

export default function Home() {
  return (
    <>
      <TodoApp />
    </>
  );
}
