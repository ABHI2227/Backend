import http from 'http';


const server = http.createServer((req,res)=>{
    

if (req.url === '/') {
    res.end('Home Page');    
}else if (req.url === '/about') {
    res.end('About Page');    
}else if (req.url === '/contact') {
    res.end('Contact Page');    
}else {
    res.end(`
    <h1>404 Page Not Found</h1>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    `);
}
});


const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});