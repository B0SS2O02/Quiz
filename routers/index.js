const router=require('express').Router()
const client=require('./client')
const admin=require('./admin')



router.use('/api',client)

router.use('/admin',admin)

router.use('/',(req,res)=>{
    res.sendFile('public/client/index.html')
})

module.exports=router