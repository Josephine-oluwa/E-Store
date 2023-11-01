import {Application, Request, Response} from "express"
import auth from "./router/authRouter"
import product from "./router/StoreRouter"

export const mainApp = (app: Application) => {
    app.use("/api", auth)
    app.use("/api", product)
   try {
    app.get ("/",  async (req: Request, res: Response)  => {
        try {
            return res.status(201).json({
                message: "your mainApp has been connected"
            })

        } catch (error) {
            return res.status(404).json({
                message: "an error occurred"
            })
        }
    })
   } catch (error) {
console.log(error)
   }

}