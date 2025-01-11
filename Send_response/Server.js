import Express from 'express';
import path from 'path';
const app = Express();

const port = 3000;

const product = [
    {
        title: 'iphone -15',
        price: 10000
    },
    {
        title: 'OnePlus 9 Pro',
        price: 20000
    },

    {
        title: 'Nokia',
        price: 3000
    }

]

//send response 
app.get('/', (req, res) => {
    // res.json({messagr:'fetch all product',
    //     products:product,
    // success:true});

    // res.send('<h1>Abhishek Malve</h1>');
        
const dir =path.resolve();

// console.log(dir);

// res.sendFile('index.html')
const url = path.join(dir,'index.html');
res.sendFile(url);



const name = 'RAM';//DYNAMIC NAME ,TEMPLATE ENGINE IS IMPORTANT TO SHOW THIS 


})




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});