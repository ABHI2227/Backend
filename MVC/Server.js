import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import User from './Models/User.js';


const app = express();
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhishekmalve27022:iELngosmU6CyAprw@cluster0.o7vrb.mongodb.net/', {
  dbName: 'NodeJs_Mastery_Course',
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Render the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/form-submit', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({
      message: 'Your form has been submitted successfully!',
      newUser: user,
      success: true,
    });
  } catch (error) {
    console.error('Error while creating user:', error);
    res.status(500).json({
      message: 'An error occurred while submitting the form.',
      success: false,
    });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
