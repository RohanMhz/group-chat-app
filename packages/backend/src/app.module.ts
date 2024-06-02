import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { MessageModule } from './message/message.module';
import { SocketGateway } from './chat.gateway';

@Module({
  imports: [
    AuthModule, UsersModule, MessageModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    MongooseModule.forRoot('mongodb://localhost:27017/chat-app'),
    MessageModule,
    ],
  controllers: [],
  providers: [SocketGateway],
})
export class AppModule {}
