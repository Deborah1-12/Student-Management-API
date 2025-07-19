import z from 'zod';

//zod validation schema
export const enrollmentSchema = z.object(
    {
        studentId: z.number(),
        courseId: z.number(),
        
    }
).required()

export type EnrollmentDto = z.infer<typeof enrollmentSchema>