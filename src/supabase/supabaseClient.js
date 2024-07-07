// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dvvcmzddgqymakkbwekd.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2dmNtemRkZ3F5bWFra2J3ZWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NDAzOTIsImV4cCI6MjAzNDMxNjM5Mn0.YGRQ3aQ6DBIqifg-PxIxhd6N1ECtWdQRLo39pETVI74'; 
export const supabase = createClient(supabaseUrl, supabaseKey);
