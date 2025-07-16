import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
   const { username, email, password } = req.body;

   try {
      const existing = await User.findone({email});
      if (existing) return res.status(400).json({message: "Email already in use"});

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashedPassword });

      res.status(201).json({ message: "User registered"});

   } catch (err) {
      res.status(500).json({message: err.message});
   }
};

export const loginUser = async (req, res) => {
   const {email, password} = req.body;

   try {
      const user = await User.findOne({email});
      if (!user) return res.status(404).json({message: "User not found"});

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return res.status(401).json({message: "Invalid password"});

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "2d" });
      res.json(200).json({ token, user: { username: user.username, email: user.email }});
   } catch (err) {
      res.status(500).json({ message: err.message});
   }
};