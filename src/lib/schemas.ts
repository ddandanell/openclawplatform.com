import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().email("Please enter a valid email address"),
  companySize: z.string().refine(
    (val) => ["1-10", "11-50", "51-200", "201-500", "500+"].includes(val),
    { message: "Please select a company size" }
  ),
  workflow: z.string().min(10, "Please describe your workflow in at least 10 characters").max(1000, "Description is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
