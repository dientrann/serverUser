import express from 'express';
import dotenv from 'dotenv';

import userAPI from './routers/index.js'

const app = express();

dotenv.config();

app.use('/api', userAPI)

app.get('/', (req, res) => {
    console.log("server ok");
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server run on at: ${process.env.HOST}:${process.env.PORT}`);
})