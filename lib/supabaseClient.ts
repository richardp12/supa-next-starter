import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://https://ykzfgiaogoodzjurjhys.supabase.co",   // <-- your Supabase Project URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlremZnaWFvZ29vZHpqdXJqaHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MDY5NjgsImV4cCI6MjA4MTI4Mjk2OH0.TO-96Uwi0-Wlqf7r0rVCtPdecPx9HkZq23MfwYiZC_Y"                          // <-- your Supabase anon key
);

export default supabase;
