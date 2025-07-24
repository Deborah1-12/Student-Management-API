import z from "zod";
import { registerCourseSchema } from "./createCourseDto";


export const UpdateCourseSchema = registerCourseSchema.partial();

export type UpdateCourseDto = z.infer<typeof UpdateCourseSchema>;