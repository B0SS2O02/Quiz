const router=require('express').Router()
const db=require('../models')


router.get('/test',async(req,res)=>{
    let data=await db.Tests.findAll({
        attributes:['Id','Name']
    })
    res.json(data)
})

module.exports=router