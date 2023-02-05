create table "public"."todoitem" (
    "id" bigint generated always as identity not null,
    "title" text not null,
    "is_completed" boolean,
    "created_at" timestamp with time zone default now(),
    "user_id" uuid not null,
    "description" text
);


alter table "public"."todoitem" enable row level security;

CREATE UNIQUE INDEX todoitem_pkey ON public.todoitem USING btree (id);

alter table "public"."todoitem" add constraint "todoitem_pkey" PRIMARY KEY using index "todoitem_pkey";


