require('dotenv').config();
const express=require('express');
const bodyparser=require('body-parser')

const router=require('./routes/userRout')

const app=express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}));
app.use('/user',router)

app.set('view engine','ejs')//lets access all ejs files from 'views' folder
app.get('/home',(req,res)=>{
    res.render('showdata');
})
app.listen(process.env.PORT);