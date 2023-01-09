import { Handler } from "$fresh/server.ts";

export const handler: Handler = (_req, _ctx) => {
  return new Response(JSON.stringify([{
    id: 0,
    text: "write app",
    completed: true,
  }, {
    id: 1,
    text: "???",
  }, {
    id: 2,
    text: "profit!",
  }]));
};
