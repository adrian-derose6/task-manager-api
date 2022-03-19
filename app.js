import express from 'express';
import taskRoutes from './routes/tasks.js';
import connectDB from './db/connect.js';
import notFound from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);

app.use(notFound);
app.use(errorHandler);

const port = 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`server is listening on port ${port}`));
	} catch (error) {
		console.log(error);
	}
};

start();
