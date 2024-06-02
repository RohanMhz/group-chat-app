import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './entities/message.entity'; // Import the Message model

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

    async getAllMessages() {
        return await this.messageModel.find().exec();
    }
    async storeMessage(message: Message): Promise<Message> {
        const newMessage = new this.messageModel(message);
        return await newMessage.save();
    }
}