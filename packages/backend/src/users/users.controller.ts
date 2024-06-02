import { Controller, Get, Post, Body, UseGuards, Req, UsePipes, ValidationPipe, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { Request } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import * as Boom from '@hapi/boom';

@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User.name) 
    private readonly usersModel: Model<User>,
    private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  profile(@Req() req: Request) {
    return req.user;
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  async registerUser(@Body() payload: RegisterUserDto) {
    const { email } = payload;
    const user = await this.usersModel.findOne({email})
    if (user) {
      throw new ConflictException("User already registered");
    }
    const newUser = new this.usersModel(payload)
    return { message: 'User registered successfully', user: { email: newUser.email, username: newUser.username } };
  }

}
