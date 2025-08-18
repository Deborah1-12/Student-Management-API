import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Enrollments extends Document{
    @Prop()
    studentEmail: string

    @Prop()
    courseTitle: string
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollments);