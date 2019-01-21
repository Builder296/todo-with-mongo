'use strict';

import { Server } from 'hapi';

const server = new Server({
    port: 8000,
    host: 'localhost'
});

server.route([
    {
        path: "/",
        method: "GET",
        handler: (request, h) => {
            return "Hello World !!"
        }
    },
]);

const start = async () => {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server running at: ${server.info.uri}`);
};

start();