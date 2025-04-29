import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlnphegvnoqvfhswtmda.supabase.co";
const supabaseKey =
  "DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbnBoZWd2bm9xdmZoc3d0bWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDcxMzcsImV4cCI6MjA2MDcyMzEzN30._WFFengpFuN7bxc-DcjMyo5hidA7O-C9ACqds71_5DI";

export const supabase = createClient(supabaseUrl, supabaseKey);
