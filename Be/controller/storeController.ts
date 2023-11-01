import express, {Request, Response} from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import storeModel from "../model/storeModel"
import { streamUpload } from "../utils/stream"


export const createProduct = async (req: Request, res: Response) => {
    try {
 const {title, cost} = req.body

      const {secure_url, public_id}: any = await streamUpload(req)

        const product = await storeModel.create({
            title,
             cost,
            image: secure_url,
            imageID: public_id

        })
        return res.status(201).json({
            message: "create product", 
            data: product
        })
    } catch (error) {
        return res.status(201).json({
            message: "Error"
        })
    }
}



export const viewProduct = async (req: Request, res: Response) => {
    try {
 const {productID}  = req.params;

      

        const product = await storeModel.findOne({productID})
        return res.status(201).json({
            message: "create product", 
            data: product
        })
    } catch (error) {
        return res.status(201).json({
            message: "Error"
        })
    }
}



export const viewAllProduct = async (req: Request, res: Response) => {
    try {
 const {productID}  = req.params;

      

        const product = await storeModel.findOne({productID})
        return res.status(201).json({
            message: "create product", 
            data: product
        })
    } catch (error) {
        return res.status(201).json({
            message: "Error"
        })
    }
}
