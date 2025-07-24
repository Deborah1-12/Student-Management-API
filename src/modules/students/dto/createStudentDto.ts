import z from 'zod';

export const createStudentSchema = z.object(
    {
        name : z.string(),
        email: z.string(),
        yearOfAdmission: z.number().positive()
    }
).required()

export type CreateStudentDto = z.infer<typeof createStudentSchema>