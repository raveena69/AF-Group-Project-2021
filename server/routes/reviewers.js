const router = require("express").Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
router.use(cors());
process.env.SECRET_KEY = 'secret';
let Reviewer = require("../models/Reviewer");

router.route("/register").post((req,res)=>{
    const today = new Date();
    const reviewerData = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        created:today
    }
    Reviewer.findOne({
        email:req.body.email
    })
        .then(reviewer=>{
            if(!reviewer){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    reviewerData.password = hash
                    Reviewer.create(reviewerData)
                        .then(reviewer=>{
                            res.json({status:reviewer.email+"Registered"})
                        })
                        .catch(err=>{
                            res.send("error"+err);
                        })
                })
            }else{
                res.json({error:"User already registered"})
            }
        })
        .catch(err=>{
            res.send("error" + err);
        })
})

router.route("/login").post((req,res)=>{

    Reviewer.findOne({
        email:req.body.email
    })
        .then(reviewer=>{
            if(reviewer){
                if(bcrypt.compareSync(req.body.password, reviewer.password)){
                    const payload ={
                        _id : reviewer._id,
                        firstName : reviewer.firstName,
                        lastName : reviewer.lastName,
                        email : reviewer.email,
                        username : reviewer.username
                    }
                    let token = jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn:1440
                    })
                    res.send(token)
                }else{
                    res.json({error:"Reviewer does not exist in the system"})
                }
            }else{
                res.json({error:"Reviewer does not exist in the system"})
            }
        })
        .catch(err=>{
            res.send("error" + err);
        })
})

router.route("/profile").get((req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    Reviewer.findOne({
        _id:decoded._id
    })
        .then(reviewer=>{
            if(reviewer){
                res.json(reviewer)
            }else{
                res.send("Reviewer does not exist");
            }
        })
        .catch(err=>{
            res.send("error" + err);
        })
})



module.exports = router;