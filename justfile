default: lint

lint:
    deno lint

migrate target:
    supabase db diff --use-migra -f {{target}}
