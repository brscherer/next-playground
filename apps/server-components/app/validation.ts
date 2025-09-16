import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(200, { message: "Message too long (max 200 chars)" }),
});