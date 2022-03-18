import express from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

app.use('/api/v1/tasks', taskRoutes);

const port = 5000;

app.listen(port, console.log(`server is listening on port ${port}`));
