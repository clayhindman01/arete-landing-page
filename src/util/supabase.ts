import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "";

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey);


// function to insert the email into the waitlist table
export async function addToWaitlist(email: string) {
    if (!supabase) {
        console.warn('Supabase is not configured. Skipping waitlist submission.');
        return null;
    }

    const { data, error } = await supabase
        .from('beta-users')
        .insert([{ email }]);

    if (error) {
        console.error('Error adding to waitlist:', error);
        throw error;
    }
    return data;
}