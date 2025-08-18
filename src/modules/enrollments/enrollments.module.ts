import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollments.service';
import { EnrollmentController } from './enrollment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrollments, EnrollmentSchema } from './enrollments.schema';

@Module({
  imports: [MongooseModule.forFeature([{
        name: Enrollments.name,
        schema: EnrollmentSchema
      }])],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
})
export class EnrollmentModule {}