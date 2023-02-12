# Fresh Todo App

Yet another crappy todo app. This one created using Deno Deploy, Fresh, and Supabase.

![Gotta Be Fresh gif](https://media.giphy.com/media/xUySTYO1CjMCU8GyZ2/giphy.gif)

> ⚠️ This project is still under development. Expect breaking changes.

## Requirements

You'll need the following to run/develop:

- [Docker](https://www.docker.com/)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
- [Supabase Accout](https://supabase.com/)
- [Deno](https://deno.land/)

## Usage

Note: Make sure docker is running.

Start the project:

```sh
supabase start
deno task start
```

`supabase start` will pull down mutiple supabase docker images, to replicate a supabase cloud project locally.

We need at least a db and auth token from this.

**NOTE**: `supabase start` will apply all migration and seed scripts after starting the db.


`deno task start` will watch the project directory and restart the deno server as necessary.
