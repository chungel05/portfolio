import { z } from "zod";

export const messageSchema = z.object({
    name: z.string().min(2, {
        message: "Your name must be at least 2 characters.",
    }),
    email: z.string(),
    message: z.string(),
});
