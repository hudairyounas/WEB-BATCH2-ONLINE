import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id); //? xyz, abc

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id); //? xyz
  });
});

httpServer.listen(5000, () => {
  console.log("Server is running on port 5000");
});



// ? express
// ? cors
// ? socket.io
// ? socket.io-client