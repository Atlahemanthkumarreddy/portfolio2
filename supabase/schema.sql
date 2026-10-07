-- Contact form table for the portfolio.
-- Run this once in Supabase: Dashboard → SQL Editor → New query → paste → Run.

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  subject     text,
  message     text not null,
  is_read     boolean not null default false,
  created_at  timestamptz not null default now(),

  constraint name_length    check (char_length(name) between 1 and 100),
  constraint email_format   check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  constraint subject_length check (subject is null or char_length(subject) <= 150),
  constraint message_length check (char_length(message) between 10 and 5000)
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- Row Level Security: visitors may only INSERT messages.
-- There is no SELECT/UPDATE/DELETE policy, so nobody can read the messages
-- with the public key. You read them in the Supabase dashboard (Table Editor).
alter table public.contact_messages enable row level security;

drop policy if exists "Visitors can send messages" on public.contact_messages;
create policy "Visitors can send messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Visitors may only fill these columns; id, is_read and created_at use their defaults.
revoke all on public.contact_messages from anon;
grant insert (name, email, subject, message) on public.contact_messages to anon;
