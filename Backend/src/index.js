import dotenv from 'dotenv';
import connectDB from './db/index.js';
import path from 'path';
import { dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { rmSync } from 'fs';

// Get the current directory name
const pathName = fileURLToPath(import.meta.url);
const __dirname = dirname(pathName);

const app = express();

// Load environment variables
dotenv.config({
  path: path.join(__dirname, './env'),
});

// Serve static files
app.use(express.static(path.join(__dirname, '..', '..', 'News', 'dist')));

// Serve index.html on the root route
app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '..', '..', 'News', 'dist', 'assets', 'index.html'));
});


connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection Failed !!!', err);
  });


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
