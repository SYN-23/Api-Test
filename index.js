const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");


const app = express();
const Model=require('./details');


app.use(cors({
    origin:"*"
}))
app.use(express.json());



//Mongodb Setting
const mongoString="mongodb+srv://sdsayan23:12345@cluster0.qdu9ni9.mongodb.net/";
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//get
app.get('',(req,res) =>
{
    res.send("welcome to Express ")
})

//post 
app.post('/addProduct', async(req,res) =>
{
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        phoneNumber:req.body.phoneNumber,
        
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
    
})

//update
app.patch('/updateProduct',(req,res) =>
{
    res.send("update your data ")
})

//delete
app.post('/deleteProduct',(req,res) =>
{
    res.send("Delete your data ")
})

//all data
app.get('/getAllProducts',async(req,res) =>
{
    try{
        const data=await Model.find();
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/getProductsById',(req,res) =>
{
    res.send("Get data by id ")
})

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})

