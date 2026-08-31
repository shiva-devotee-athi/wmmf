import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "Name is required" })
    .max(100, "Name must be less than 100 characters."),
  email: z.email({ error: "Enter a valid email address." }).trim(),
  message: z
    .string({ error: "Message is required" })
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message must be less than 2000 characters."),

  copyMe: z.boolean(),
  intent: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export { contactSchema, type ContactFormData };
