import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useRef, useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import { ITodos } from "../types.d.ts";

export default function TodoApp() {
  const [todoList, setTodoList] = useState<ITodos>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/todos");
        const data = await res.json();
        if (data) setTodoList(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (IS_BROWSER) getData().catch(console.error);
  }, []);

  const _add = () => {
    console.log("add button clicked");
    return;
  };

  return (
    <div class="h-auto w-full flex items-center justify-center">
      <div class="rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
          <h1>{IS_BROWSER ? document.title : "Todo App"}</h1>
          <div class="flex items-center mt-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4"
              placeholder="Text Here"
              ref={inputRef}
              onKeyPress={(evt) => {
                evt.key === "Enter" && _add();
              }}
            >
            </input>
            <Button
              class="text-green-600 border-green-600 hover:text-white hover:bg-green-600"
              onClick={_add}
            >
              Add Task
            </Button>
          </div>
        </div>
        <div id="todo-list">
          {todoList.map((todo, i) => (
            <div
              id={`todo-item-${todo.id || i}`}
              class={`flex py-2 px-3 items-center border-b-4 border-gray-400${
                todo.is_completed ? " bg-green-100 " : " bg-red-100 "
              }`}
            >
              <p class="w-full text-black ">{todo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
