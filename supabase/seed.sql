create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text not null,
  first_name text,
  last_name text,

  primary key (id)
);

alter table public.profiles enable row level security;

create table public.todos (
    id bigint generated always as identity primary key,
    t_text text not null,
    is_completed boolean,
    created_at timestamptz default now()
);

alter table public.todos enable row level security;

CREATE POLICY "Enable read access for all users" ON "public"."todos"
AS PERMISSIVE FOR SELECT
TO public
USING (true)
