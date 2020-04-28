import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config';

// routes
import authRoutes from './routes/api/auth';
import itemRoutes from './routes/api/items';
import userRoutes from './routes/api/users';
import studentRoutes from './routes/api/students';

const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Mongo
mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true  } ,() => console.log('connected to db'));

//Middleware
app.use(express.json());

// Use Routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
