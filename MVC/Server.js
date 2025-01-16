import express from 'express';
import path from 'path';
import ejs from 'ejs';
import mongoose from 'mongoose';
import {User}  from './Models/User.js';


const app = express();
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhishekmalve27022:iELngosmU6CyAprw@cluster0.o7vrb.mongodb.net/', {
    dbName: "NodeJs Mastery Course"
}
).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
}); 


app.get( '/', (req, res) => {
    res.render('index.ejs');
})

app.post('/form-submit', (req, res) => {
    console.log(req.body);
    res.json({
       message: 'your form has been submited'

    })
    try {
        const user = await User.create(req.body);
        console.log(user);
    } catch (error) {
        console.error(error);
    }   
})


const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});