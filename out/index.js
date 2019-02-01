'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Server } from 'hapi';
const server = new Server({
    host: '0.0.0.0',
    port: process.env.PORT || 8000
});
server.route([
    {
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return 'Hello World !!';
        }
    },
]);
const start = () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server running at: ${server.info.uri}`);
});
start();
