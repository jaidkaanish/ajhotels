const express = require('express')

const router = express.Router();
const Person = require('../model/person')

router.post("/",async (req,res)=>{
    try{
       const data= req.body
   
       const newPerson= new Person(data);  
   
       const response = await newPerson.save();
       console.log("data saved")
       res.status(200).json(response)
    }catch(err){
       console.log(err);
       res.status(500).json({error:'error'})
    }
   })
   
router.get("/",async(req,res)=>{
    try{
        const data = await Person.find();
        console.log("data fetched")
        res.status(200).json(data)

    }catch(err){
        console.log(err);
        res.status(500).json({error:'error'})

    }
})
router.get('/:workType',async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType =='chef'|| workType =='manager' || workType =='waiter' ){
            const response = await Person.find({work : workType})
            console.log('fetched')
            res.status(200).json(response)
        }else{
            res.status(400).json({error: 'invali worktype'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error '})
    }
})
router.put("/:id",async (req,res)=>{
    try{
        const personID = req.params.id
        const updatePersonData = req.body

        const response= await Person.findByIdAndUpdate(personID,updatePersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({err:"person not found"})
        }
        console.log('data updated')
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error '})
    }
})
router.delete("/:id", async(req,res)=>{
try{
    const personID = req.params.id

    const response= await Person.findByIdAndDelete(personID)
    if(!response){
        return res.status(404).json({err:"person not found"})
    }
            res.status(200).json({person:"delted successfully"});
    
}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error '})
} 
}  
)   
module.exports= router