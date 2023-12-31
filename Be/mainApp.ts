import  { Application, Response, Request } from "express";
import product from "./router/productRouter"


export const mainApp = (app: Application) => {
    
    
    try {
        
    app.get("/", async(req: Request, res: Response): Promise<Response>=> {
        try {
            return res.status(200).json({
                message: "the api is up and connected"
            })
        } catch (error) {
           return res.status(404).json({
            message: "Error"
           })
        }
    })
    app.use("/api", product)
    } catch (error) {
        console.log(error)
    }
    
}

