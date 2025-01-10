import { supabase } from "./initSupabase";

export async function SelectExperience() {
    const { data: experience, error } = await supabase
        .from("experience")
        .select("*");

    if (error) {
        return { error: error.message };
    }

    return { data: experience, success: true };
}
