import express from 'express';
import path from 'path';
import ejs from 'ejs';
import { url } from 'inspector';

const app = express();


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.post('/form-submit', (req, res) => {
    console.log(req.body);
    res.json({
       message: 'your form has been submited'

    })

})


const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})