import { Server } from 'socket.io';

export function setupSockets(server) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('a user connected');
    });

    return io;
}
