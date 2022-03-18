import express from 'express';

const app = express();

// routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

const port = 5000;

app.listen(port, console.log(`server is listening on port ${port}`));
