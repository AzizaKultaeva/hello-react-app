import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jnshdcsfkscjbrorejbu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impuc2hkY3Nma3NjamJyb3JlamJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzA2NjAsImV4cCI6MTk5MzcwNjY2MH0.GpXU5n9cdUiujpZPlaxaUTrV3Y4zPynn9svIV4f9V3w'

export const supabase = createClient(supabaseUrl, supabaseKey)