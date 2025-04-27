import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import adminUploadRoutes from './routes/uploadRoutes.js';

// Get __dirname for ES module compatibility
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
const app = express();

app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parser middleware
app.use(cookieParser());

// Route definitions
app.use('/api/users', userRoutes);
app.use('/api/uploads', adminUploadRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend', 'build')));

    // For all non-API routes, serve the React app
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
} else {
    // In development, just show a simple API running message
    app.get('/', (req, res) => {
        res.send("API is running....");
    });
}

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
