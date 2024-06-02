import { WebSocketGateway, SubscribeMessage, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(8001, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['content-type'],
        credentials: true,
    },
})
export class SocketGateway {
    @WebSocketServer()
    server: Server;
    // private logger: Logger = new Logger('SocketGateway');

    @SubscribeMessage('message')
    handleMessage(@MessageBody() payload: string): void {
        this.server.emit('message', payload); // Emit the message to all connected clients
    }


    // afterInit(server: Server) {
    //     this.logger.log('Socket gateway initialized');
    //     this.server = server;
    // }

    // handleConnection(client: Socket) {
    //     this.logger.log(`Client connected: ${client.id}`);
    // }

    // handleDisconnect(client: Socket) {
    //     this.logger.log(`Client disconnected: ${client.id}`);
    // }
}