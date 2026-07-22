import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

// function to insert the email into the waitlist table
export async function addToWaitlist(email: string) {
    const { data, error } = await supabase
        .from('beta-users')
        .insert([{ email }]);

    if (error) {
        console.error('Error adding to waitlist:', error);
        throw error;
    }
    console.log('Successfully added to waitlist:', data);
    return data;
}