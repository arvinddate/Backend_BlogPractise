import express from 'express';
import BlogRoutes from './routes/blog.routes.js';
import { config } from 'dotenv';
import connectToDB from './config/dbConnection.js';
import { renderBlogDetailsById, renderBlogs } from './controllers/blog.controllers.js';

config();

const app = express();
app.set('view engine','ejs');
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('hello world main page');
});

app.use('/api/blog', BlogRoutes);

app.get('/blogs',renderBlogs);
app.get('/blogs/:blogId',renderBlogDetailsById)

app.listen(3000, async () => {
    await connectToDB();
    console.log('Server is running on port 3000');
});
