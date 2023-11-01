import express, {Application, Response, Request} from "express"
import cors from "cors"
import { mainApp } from "./mainApp";
import { dbConfig } from "./Config/DB";

const port: number = 5566;
const app: Application = express()

mainApp(app)

app.use(cors({origin: "*"}))
app.use(express.json({limit: "10m"}))

const server = app.listen(port, () => {
    console.log("server is now connected")
    dbConfig()
})


process.on("uncaughtException", (error: any) => {
    console.log("error occurred due to uncaughtException", error)

    process.exit(1)
})

process.on("unhandledRejection", (reason: any)=> {
    console.log("unhandledRejection", reason)

    server.close(()=> {
        process.exit(1)
    })
})