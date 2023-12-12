import { Response, Request, NextFunction } from "express";
const jwt = require("jsonwebtoken");
import UserModel from "../models/User";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    let payload = req.headers.authorization;    
    
    if (!payload) {
        return res.status(401).json({ message: 'No token provided..' });
    }
    let token = payload.split(" ");
    if (token.length != 2) {
        return res.status(401).json({ message: 'Not a valid format' });
    }

    try {
        let data = jwt.verify(token[1], process.env.JWT_SECRET_KEY);
        let exp = new Date(data.exp);
        if (exp >= new Date()) {
            return res.status(401).json({ message: 'Token expired' });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Not a valid token." })

    }
}

export const verifySession = async(req:Request,res:Response,next:NextFunction) => {
    let payload = req.headers.authorization;   
    if (!payload) {
        return res.status(401).json({ message: 'No token provided..' });
    }
    let token = payload.split(" ");
    if (token.length != 2) {
        return res.status(401).json({ message: 'Not a valid format' });
    }
    try {
        let data = jwt.verify(token[1], process.env.JWT_SECRET_KEY);
        let exp = new Date(data.exp);
        if (exp >= new Date()) {
            return res.status(401).json({ message: 'Token expired' });
        }
        const user = await UserModel.findOne({ _id: data._id }).populate('posts');
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Not a valid token." })

    }
}

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
    let payload = req.headers.authorization;

    if (!payload) {
        return res.status(401).json({ message: 'No token provided..' });
    }
    let token = payload.split(" ");
    if (token.length != 2) {
        return res.status(401).json({ message: 'Not a valid format' });
    }
    let userId, user;
    try {
        let data = jwt.verify(token[1], process.env.JWT_SECRET_KEY);
        userId = data._id;
        user = await UserModel.findById(userId);
        let exp = new Date(data.exp);
        if (exp >= new Date()) {
            return res.status(401).json({ message: 'Token expired' });
        }
        if (!user || !user.isAdmin) {
            return res.status(403).json({ error: "Forbidden - Not an admin" });
        }
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Not a valid token' });
    }
}
