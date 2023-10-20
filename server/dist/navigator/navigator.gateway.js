"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigatorGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const https_1 = require("https");
let NavigatorGateway = class NavigatorGateway {
    handleMessage(nav_url) {
        console.log('subscribed');
        console.log(nav_url);
        this.server.emit('receive_nav_url', nav_url);
    }
    handleConnection() {
        console.log('connected');
        this.server.emit('connected');
    }
};
exports.NavigatorGateway = NavigatorGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", https_1.Server)
], NavigatorGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('send_nav_url'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavigatorGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('connect'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavigatorGateway.prototype, "handleConnection", null);
exports.NavigatorGateway = NavigatorGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: true,
    })
], NavigatorGateway);
//# sourceMappingURL=navigator.gateway.js.map