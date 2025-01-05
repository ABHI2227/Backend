import http from 'http';


const server = http.createServer((req,res)=>{
   res.end("Hello from the server");
   
});
const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


