import Counter from "../islands/Counter.tsx";
// import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

// export const handler: Handlers = {
//   async GET(req: Request, ctx: HandlerContext) {
//     // ctx.state;
//     const resp = await ctx.render();
//     return resp;
//   },
// };
// export default function Home(props: PageProps) {
export default function Home() {
  return (
    <>
      <main class="bg-gunmetal h-screen text(white)">
        <div class="p-4 mx-auto max-w-screen-md ">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="my-6">
            Welcome to `fresh`. Try updating this message in the
            ./routes/index.tsx file, and refresh.
          </p>
          <Counter start={3} />
        </div>
      </main>
    </>
  );
}
