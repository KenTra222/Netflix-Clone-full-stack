import { User } from "../models/user.model.js";

export async function signup(req, res) {
    
   try {
      const { email, password, username } = req.body;
      
      if (!email || !password || !username) {
         return res.status(400).json({success: false, message: " all fields are required"})
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
         return res.status(400).json({success:false, message:"Invalid email"})
      }

      if (password.length < 6) {
         return res.status(400).json({success:false, message: "Password must be at least 6 characterrs"})
      }

      const existingUserByEmail = await User.findOne({ email: email })

      if (existingUserByEmail) {
         return res.status(400).json({success:false, message: 'Email already exist'})
      }

      const existingUserByUsername = await User.findOne({ username: username })

      if (existingUserByUsername) {
         return res.status(400).json({success:false, message: 'Username already exists'})
      }

      const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

      const image = PROFILE_PICS[Math.floor(Math.random()* PROFILE_PICS.length)]

      const newUser = new User({
         email: email,
         password: password,
         username: username,
         image
      })

      //postman

      await newUser.save()

   } catch (error) {
      console.log("Error in signup controller ", error.message)
      res.status(500).json({success:false, message:"internal server error"})
   }
    res.send("Signup route")
 }

 export async function login( req,res){
    res.send("Login route")
 }

 export async function logout(req, res){
    res.send("logout route")
 }