import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhishekmalve27022:iELngosmU6CyAprw@cluster0.o7vrb.mongodb.net/', {
    dbName: "NodeJs Mastery Course"
}
).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
}); 

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});