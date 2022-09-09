

const express = require('express');
const path = require('path');
const pageLayiut= require('express-ejs-layouts');
const dotenv= require('dotenv');
const userRouter= require('./routes/user');





dotenv.config();
const PORT= process.env.PORT || 4000;

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.set("view engine", "ejs");
app.use(pageLayiut);

app.use(express.static('public'));
//set layout 

app.set('layout','layouts/app');

app.use('/user',userRouter);



app.listen(PORT, ()=>{

    console.log(`this server is running on port ${PORT}`);
})