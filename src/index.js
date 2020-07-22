const cors = require('cors');
const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');

const app = express();
//za produkciju ne koristimo 4000 već .env.PORT
const PORT = process.env.PORT || 4000;
//prilikom dev razvoja
app.use(cors());
app.options('*', cors());

//da automatski parsira body u json
app.use(express.json());

//služi za uključivanje rute iz drugih fajlova
app.use(userRouter);

app.listen(PORT, ()=>{
    console.log("server is on port " + PORT);
});





