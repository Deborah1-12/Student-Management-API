import z from 'zod';

//zod validation schema
export const enrollmentSchema = z.object(
    {
        studentEmail: z.email(),
        courseTitle: z.string(),
        
    }
).required()

export type EnrollmentDto = z.infer<typeof enrollmentSchema>