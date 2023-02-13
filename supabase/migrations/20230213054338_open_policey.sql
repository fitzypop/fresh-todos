alter table "public"."todoitem" drop column "user_id";

create policy "Enable read access for all users"
on "public"."todoitem"
as permissive
for all
to public;



