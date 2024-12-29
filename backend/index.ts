import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import './src/db/db'; 
import bodyParser from 'body-parser';
import route from './src/routes/v1';
import cors from 'cors';

// Create an Express application
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Specify the port number for the server
const port: number = 5000;

// app.use(responseWrapper);

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});
// 
app.use('/api/v1',route)

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});