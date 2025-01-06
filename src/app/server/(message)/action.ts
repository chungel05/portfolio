"use server";

import { supabase } from "@/lib/initSupabase";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { messageSchema } from "@/lib/schema";

export async function InsertMessage(value: z.infer<typeof messageSchema>) {
    // Insert data into Supabase
    const { error } = await supabase.from("message").insert(value);

    if (error) {
        return { error: error.message };
    }

    // Revalidate the path to update the UI
    revalidatePath("/");

    return { success: true };
}
