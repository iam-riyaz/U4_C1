const express=require("express")

const app=express()

app.get("/books", (req,res)=>{
    res.send("books")
})

app.get("/authors", (req,res)=>{
    res.send({Permissions:true})
})

app.get("/libraries", (req,res)=>{
    res.send({Permissions:true})
})

app.listen(3000,()=>{
    console.log("my express is working fine")
})