import { supabase } from "./initSupabase";
import { z } from "zod";
import { messageSchema } from "../schema";

export async function InsertMessage(value: z.infer<typeof messageSchema>) {
    // Insert data into Supabase
    const { error } = await supabase.from("message").insert(value);

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}
