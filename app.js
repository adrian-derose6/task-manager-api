import express from 'express';
import taskRoutes from './routes/tasks.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

app.use('/api/v1/tasks', taskRoutes);

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
