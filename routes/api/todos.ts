import { Handler } from "$fresh/server.ts";
import { supabase } from "../../lib/supabase.ts";

export const handler: Handler = async (_req, _ctx) => {
  const { data, error } = await supabase.from("todoitem").select();
  // console.log(data, error);

  if (data) return new Response(JSON.stringify(data));
  return new Response();
  // return new Response(
  //   JSON.stringify([{
  //     id: 0,
  //     text: "write app",
  //     completed: true,
  //   }, {
  //     id: 1,
  //     text: "???",
  //   }, {
  //     id: 2,
  //     text: "profit!",
  //   }]),
  //   { headers: { "content-type": "application/json" } },
  // );
};
