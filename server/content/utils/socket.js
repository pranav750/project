import { Server } from "socket.io";

let io;

export const connectIo = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });
  return io;
};

export const getIo = () => {
  return io;
};
