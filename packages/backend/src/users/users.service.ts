import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  findAll() {
    const allUsers = this.userModel.find()
    return allUsers;
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).lean();
    return user;
  }
}
