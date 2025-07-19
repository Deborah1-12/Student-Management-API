import z from 'zod';

//zod validation schema for courses
export const registerCourseSchema = z.object(
    {
        title : z.string(),
        level: z.string(),
    }
).required();

export type registerCourseDto = z.infer<typeof registerCourseSchema>;