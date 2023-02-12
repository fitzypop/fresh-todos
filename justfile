default: start

start:
    supabase start
    deno task start

lint:
    deno lint

migrate target:
    supabase db diff --use-migra -f {{target}}
