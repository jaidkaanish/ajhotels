const passport= require('passport')
const Person = require('./model/person')
const localStrategy = require('passport-local').Strategy; 

passport.use(new localStrategy(async (USERNAME,password,done)=>{
    try{
      console.log('recieved', USERNAME,password)
      const user = await Person.findOne({username:USERNAME});
        if(!user){
          return done(null,false,{message:"incorrect user"});
        }
      const isPassword = user.comparePassword(password); 
      if(isPassword){
        return done(null,user);
      }else{
        return done(null,false,{message:'incorect password'});
      }  
    }catch(err){
  
    }
  }))

  module.exports= passport