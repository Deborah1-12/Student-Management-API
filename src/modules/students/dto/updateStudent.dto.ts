import z from "zod";
import { createStudentSchema } from "./createStudentDto";

export const UpdateStudentSchema = createStudentSchema.partial();

export type UpdateStudentDto = z.infer<typeof UpdateStudentSchema>;