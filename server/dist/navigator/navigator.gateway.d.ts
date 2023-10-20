/// <reference types="node" />
import { Server } from 'https';
export declare class NavigatorGateway {
    server: Server;
    handleMessage(nav_url: string): void;
    handleConnection(): void;
}
