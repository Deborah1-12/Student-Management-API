import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

   @Post('signup')
  async signup(@Body() signupdto: SignUpDto, @Res() res: Response) {
     const access_token = await this.authService.signup(signupdto);
    res.cookie('jwt', access_token, {httpOnly: true} )
    return {
          status: 'success',
          message: 'user saved successfully',
          'access-token': access_token,
        };
  }

  @Post('signin')
  signin(@Body() signindto: SignInDto) {
    return this.authService.signin(signindto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
