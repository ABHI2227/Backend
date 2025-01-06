
import http from 'http';
import Express from 'express';

const app = Express();

const port = 3000;

app.get('/', (req, res) => {
    res.end('Hello from the server');
})

app.get('/about', (req, res) => {
    res.end('About Page');
})

app.get('/contact', (req, res) => {
    res.end('Contact Page');
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
