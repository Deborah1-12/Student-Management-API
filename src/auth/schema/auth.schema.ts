import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class SignUp extends Document{
    @Prop({
        unique: true,
        required: true
    })
    name: string

    @Prop({
        unique: true,
        required: true
    })
    email: string

    @Prop({
        unique: true,
        required: true
    })
    password: string
}

@Schema()
export class SignIn extends Document{
    @Prop()
    email: string

    @Prop()
    password: string
}

export const SignUpSchema = SchemaFactory.createForClass(SignUp)
export const SigInSchema = SchemaFactory.createForClass(SignIn)