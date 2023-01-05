// import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

// export const handler: Handlers = {
//   async GET(req: Request, ctx: HandlerContext) {
//     // ctx.state;
//     const resp = await ctx.render();
//     return resp;
//   },
// };
// export default function Home(props: PageProps) {

export interface ITodo {
  id?: string;
  text?: string;
  completed?: boolean;
}

export type ITodos = ITodo[];

export default function Home() {
  const todoList: ITodos = [{ text: "write app" }, { text: "???" }, {
    text: "profit!",
  }];
  const _add = () => {
    console.log("add button clicked");
    return;
  };
  return (
    <main class="bg-gunmetal h-screen text(white) font-sans">
      <div class="h-100 w-full flex items-center justify-center">
        <div class="bg-white text-black rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div class="mb-4 ">
            <h1 class="text-grey-1000">
              <img
                src="/logo.svg"
                class="w-32 h-32"
                alt="the fresh logo: a sliced lemon dripping with juice"
              />Todo List
            </h1>
            <div class="flex items-center mt-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-1000"
                placeholder="Text Here"
                // ref={inputRef}
                onKeyPress={(evt) => {
                  evt.key === "Enter" && _add();
                }}
              >
              </input>
              {/* <AddButton onClick={_add}>Add Task</AddButton> */}
            </div>
          </div>
          <div>
            {/* {todoList.map((todo) => <TodoItem {...todo} refresh={refresh} />)} */}
            <div
              class={`flex  py-2 px-3 items-center border-b-4 border-slate-400`}
            >
              {todoList.map((todo) => (
                <p class="w-full text-grey-darkest">{todo.text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
