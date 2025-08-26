import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SigInSchema, SignUpSchema, SignIn, SignUp } from './schema/auth.schema';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SignUp.name, 
        schema: SignUpSchema,
      },
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET|| '',
      signOptions: { expiresIn: '120s' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
