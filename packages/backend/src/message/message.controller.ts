import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { MessageService } from './message.service'; // Import the MessageService
import { Message } from './entities/message.entity';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {} // Inject MessageService

    @Get('/all-messages')
    @UseGuards(JwtAuthGuard)
    async getAllMessages() {
        return this.messageService.getAllMessages(); // Call the method from MessageService
    }

    @Post('/store-message')
    @UseGuards(JwtAuthGuard)
    async storeMessage(@Body() message: Message) {
        return this.messageService.storeMessage(message);
    }
}