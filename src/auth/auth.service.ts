import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpDto, SignInDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUp } from './schema/auth.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(SignUp.name) private readonly signupModel: Model<SignUp>,
    private jwtService: JwtService,
  ) {}

  async signup(signupdto: SignUpDto) {
    const saltOrRounds = 10;
    const password = signupdto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    signupdto.password = hash;

    let user;
    let payload;
    try {
      signupdto.email = signupdto.email.toLowerCase();
      const newUser = new this.signupModel(signupdto);
      user = await newUser.save();
      payload = { sub: user._id, email: user.email };
      const access_token = await this.jwtService.signAsync(payload)
      return access_token;
    } catch (err) {
      if (err.code === 11000) {
        throw new BadRequestException('Email has already been used');
      }
      throw err;
    }
  }

  async signin(signindto: SignInDto) {
    const user = await this.signupModel.findOne({
      email: signindto.email,
    });
    if (user) {
      const comparePassword = await bcrypt.compare(
        signindto.password,
        user.password,
      )
      if (comparePassword) {
        const payload = { sub: user._id, email: user.email };
        const accessToken = await this.jwtService.signAsync(payload);
        return {
          status: 'success',
          message: 'user signed in successfully',
          'access-token': accessToken,
          data: { user },
        };
      }
      throw new UnauthorizedException('IncorrectPassword');
    }
    throw new UnauthorizedException('Incorrect Email');
    // if (!user) {
    //   throw new UnauthorizedException('Incorrect Email or Password');
    // }
    // const isMatch = await bcrypt.compare(signindto.password, user.password);
    // if (!isMatch) {
    //   throw new UnauthorizedException('Incorrect Email or Password');
    // }
    // return {
    //   status: 'success',
    //   message: 'user signed in successfully',
    //   data: { user },
    // };
  }

  findAll() {
    return this.signupModel.find();
  }

  findOne(id: number) {
    return this.signupModel.findById(id);
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return this.signupModel.findByIdAndUpdate(id);
  }

  remove(id: number) {
    return this.signupModel.findByIdAndDelete(id);
  }
}
