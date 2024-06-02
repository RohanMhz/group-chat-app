import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule, UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    MongooseModule.forRoot('mongodb://localhost:27017/chat-app'),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
