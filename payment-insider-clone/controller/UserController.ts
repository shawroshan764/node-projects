import { Request, Response } from "express";
import { handleGenericError } from "../helpers/ErrorHandlers";
import UserModel from "../models/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password, mobile, gender, city, state } = req.body;
        const checkEmailExists = await UserModel.findOne({email});
        if(checkEmailExists) return res.status(401).json({message:"Registration Failed. Email already exists."});
        const newUser = await UserModel.create({
            name,
            email,
            password,
            gender,
            mobile,
            city,
            state
        });
        return res.status(201).json({ message: "User registered successfully!", newUser });
    } catch (error) {
        handleGenericError(res, "User registration failed.");
    }
}
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password." });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password." });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d",
        });
        res.setHeader("authorization", token);
        res.setHeader("Access-Control-Expose-Headers", "*");

        return res.status(200).json({ message: "Login successfull", token });
    } catch (error) {
        console.log(error);
        handleGenericError(res, "Event creation failed.");
    }
}