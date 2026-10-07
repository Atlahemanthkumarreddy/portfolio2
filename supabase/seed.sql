-- Sample messages for testing the contact_messages table.
-- Run schema.sql first, then run this in the Supabase SQL Editor.
-- To remove the samples afterwards:
--   delete from public.contact_messages where email like '%@example.com';

insert into public.contact_messages (name, email, subject, message, is_read, created_at)
values
  ('Priya Sharma', 'priya.sharma@example.com', 'Frontend Developer role',
   'Hi Hemanth, we have an opening for a React developer on our team. Would you be free for a quick call this week?',
   false, now() - interval '2 days'),

  ('Rahul Verma', 'rahul.verma@example.com', 'Loved your Task Management project',
   'Your Task Management System looks great. How did you handle JWT refresh tokens on the frontend?',
   true, now() - interval '5 days'),

  ('Ananya Rao', 'ananya.rao@example.com', 'Freelance website',
   'I need a responsive website for my small business. Could you share your availability and a rough quote?',
   false, now() - interval '1 day'),

  ('Karthik Reddy', 'karthik.reddy@example.com', null,
   'Hey! Saw your portfolio on LinkedIn. Let us connect and talk about a hackathon team next month.',
   false, now() - interval '3 hours');
