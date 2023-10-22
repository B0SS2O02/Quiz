const express=require('express')
const app=express()
app.use((req,res)=>{
    res.send("123")
})
app.listen(8080,()=>{
    console.log(`Server started on http://localhost:8080`)
})