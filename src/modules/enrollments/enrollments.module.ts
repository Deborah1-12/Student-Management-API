import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollments.service';
import { EnrollmentController } from './enrollment.controller';

@Module({
  imports: [],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
})
export class EnrollmentModule {}