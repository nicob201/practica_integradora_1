import express from "express";
import mongoose from "mongoose";
import __dirname from "./utils.js";
import { Server } from "socket.io";
import cartRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";
import productRouter from "./routes/products.router.js";
import messageRouter from "./routes/messages.router.js";
import userRouter from "./routes/users.router.js";
import handlebars from "express-handlebars";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8080;
const httpServer = app.listen(
  PORT,
  console.log(`Server running on port ${PORT} OK`)
);
const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => console.error("Connection error!", error));

app.use("/api/carts", cartRouter);
app.use("/api/products", productRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
app.use("/", viewsRouter);

io.on("message", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    console.log(`Received message: ${message.message}`);
    io.emit("message", message.message);
  });
});

export default io;
