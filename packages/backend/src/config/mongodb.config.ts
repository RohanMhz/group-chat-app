import { Injectable } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Injectable()
export class MongodbConfig {
  url = 'mongodb://localhost:27017';
  dbName = 'chat-app';
}