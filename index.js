require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');
const connectRedis = require('./config/redis');
// const authRoutes = require('./routes/auth.route');
// const messageRoutes = require('./routes/message.route');
// const userRoutes = require('./routes/user.route');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// connect to DB
connectDB;

// conenct to redis
connectRedis;


