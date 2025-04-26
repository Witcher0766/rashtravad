import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bakvadyvfckleqscgvnr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJha3ZhZHl2ZmNrbGVxc2Nndm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMDgzNDgsImV4cCI6MjA1OTc4NDM0OH0.NbfDmVkjecrr1MJN8AQqhv2_M1iHmaE7sJ0KgyuUCyU'; // 🔁 Replace with actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
