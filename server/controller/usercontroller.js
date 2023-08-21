import  User from '../module/user.js';



export const adduser = async(req , res , err) => {
try{
     let exist = await  User.findOne({sub : req.body.sub})
     if (exist ){
        res.status(200).json({message : "user already exists"})
        return
     }
     else{
      const newUser = new User(req.body)
        await newUser.save()
        return res.status(200).json(newUser)
     }

   
}catch(err){
    console.log(err)
}
}

export const getuser = async(req , res , err) => {
try{
   const userinfo = await User.find({})
   console.log("getuser working in the background")
   return res.status(200).json(userinfo)

}
catch(err){
   console.log(err)
   return res.status(400).json({message : err.message})
   
}
}