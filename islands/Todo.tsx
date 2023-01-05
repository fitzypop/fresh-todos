import { ITodos } from "../routes/index.tsx";
import { useEffect, useRef, useState } from "preact/hooks";

export default function TodoApp() {
  const [todoList, setTodoList] = useState<ITodos>([{
    text: "write app",
    completed: true,
  }, {
    text: "???",
  }, {
    text: "profit!",
  }]);
  const inputRef = useRef<HTMLInputElement>(null);
  const refresh = () => {
    // get().then((todoList) => {
    //   setTodoList(todoList);
    //   console.log(todoList, "todoList");
    // });
  };
  useEffect(refresh, []);

  //   const _add = () => {
  //     const inputEl = inputRef.current;
  //     if (inputEl) {
  //       const body = {
  //         text: inputEl.value,
  //       };
  //       add(body)
  //         .then(refresh)
  //         .finally(() => {
  //           inputEl.value = "";
  //         });
  //     }
  //   };
  const _add = () => {
    console.log("add button clicked");
    return;
  };
  return (
    <main class="bg-gunmetal h-screen text(white) font-sans">
      <div class="h-auto w-full flex items-center justify-center">
        <div class="rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div class="mb-4">
            <h1>Todo List</h1>
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
              {/* <AddButton onClick={_add}>Add Task</AddButton> */}
            </div>
          </div>
          <div>
            {todoList.map((todo) => (
              <div
                class={`flex py-2 px-3 items-center border-b-4 border-gray-400${
                  todo.completed ? " bg-green-100 " : " bg-red-100 "
                }`}
              >
                <p class="w-full text-black ">{todo.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
