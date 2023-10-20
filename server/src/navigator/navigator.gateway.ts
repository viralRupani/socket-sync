import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'https';

@WebSocketGateway({
  cors: true,
})
export class NavigatorGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send_nav_url')
  handleMessage(@MessageBody() nav_url: string) {
    console.log('subscribed');
    console.log(nav_url);
    this.server.emit('receive_nav_url', nav_url);
  }

  @SubscribeMessage('connect')
  handleConnection() {
    console.log('connected');
    this.server.emit('connected');
  }
}
