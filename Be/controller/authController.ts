import express, {Request, Response} from "express"
import bcrypt from "bcrypt"
import authmodel from "../model/authmodel"
import jwt from "jsonwebtoken"

export const createAuth = async (req: Request, res: Response) => {
    try {
 const {userName, email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)

        const user = await authmodel.create({
            userName, email, password
        })
        return res.status(201).json({
            message: "user has been created"
        })
    } catch (error) {
        return res.status(201).json({
            message: "Error"
        })
    }
}


export const SignInAuth = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body
        const user = await authmodel.findOne({email})
        

        if(user) {
            const validPass = await bcrypt.compare(password, user?.password)
            if (validPass) {
                const token = jwt.sign({id: user._id}, "signUser")
                return res.status(200).json({
                    message: `welcome back ${user.userName}`,
                    
                    data: token
                })
            } else {
                return res.status(404).json({
                    message: "user not found"
                })
            }
        } else {
            return res.status(404).json({
                message: "user not found"
            })
        }
    } catch (error) {
        message: Error
    }
}

export const viewUserAuth = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}