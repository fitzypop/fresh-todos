// The default layout for all routes

import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Gotta Be Fresh Todo App</title>
      </Head>
      <Component />
    </>
  );
}
