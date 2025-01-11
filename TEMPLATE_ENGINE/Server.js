import express from 'express';
import path from 'path';

const app = express();


app.use(express.static(path.join(path.resolve(), 'public')));


// Array of products
const products = [
    { title: 'iPhone 15', price: 100000 },
    { title: 'OnePlus 9 Pro', price: 65000 },
    { title: 'Nokia 3310', price: 5000 },
];

app.get('/', (req, res) => {
    let name = 'Ram';
    // Pass the 'name' and 'products' variables to the EJS template
    res.render('index.ejs', { name, products });
});



const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
