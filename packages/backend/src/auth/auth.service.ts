import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) 
    private readonly usersModel: Model<User>,
    private jwtService: JwtService) {}

  async validateUser({ email, password }) {
    const user = await this.usersModel.findOne({ email }).lean()
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!user) return null;
    if (checkPassword) {
      const { password, ...userDetails} = user
      return this.jwtService.sign(userDetails);
    }
  }
}
