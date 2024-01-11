import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import userAPI from './routers/index.js'

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use('/api', userAPI)

// app.get('/', (req, res) => {
//     console.log("server ok");
// })


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server run on at: ${process.env.HOST}:${process.env.PORT}`);
})