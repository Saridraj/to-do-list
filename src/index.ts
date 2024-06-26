import express from 'express';
import bodyParser from 'body-parser';
import todoListRoutes from './route/todolist.router';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use('/api/v1', todoListRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
