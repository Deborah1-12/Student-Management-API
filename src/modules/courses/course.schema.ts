import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop({
    name: String,
    isRequired: true,
  })
  title: string;

  @Prop({
    name: String,
    isRequired: true,
  })
  level: string;
}


export const CourseSchema = SchemaFactory.createForClass(Course)