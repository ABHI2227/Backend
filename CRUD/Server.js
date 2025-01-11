import Express from 'express';

const app = Express();

//C = Create => Post (method)
//R = Read => Get (method)
//U = Update => Put (method)
//D = Delete => Delete (method)


app.get('/suman', (req, res) => {
    res.end('Hello from the server');
})

app.post('/instagram_post', (req, res) => {
    res.end('Hello from the server');
})


  
const port = 3000;
app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});