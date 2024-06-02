import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
  } from '@nestjs/websockets';
  
  @WebSocketGateway({
    cors: {
      origin: ['http://192.168.1.5:5173'], // Allow all origins for development. Replace '*' with specific origins for production.
      methods: ['GET', 'POST'],
      allowedHeaders: ['content-type'],
      credentials: true,
    },
  })
  export class ChatGateway {
    @WebSocketServer()
    server;
  
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
      this.server.emit('message', message);
    }
  }

  