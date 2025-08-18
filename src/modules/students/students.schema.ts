import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Student extends Document{
    @Prop({
        type: String,
        isRequired: true,
    })
    name: string;

    @Prop({
        type: String,
        isRequired: true
    })
    email:string;

    @Prop({
        type: String,
        isRequired: true
    })
    yearOfAdmission: number;
    
}

export const StudentSchema = SchemaFactory.createForClass(Student)