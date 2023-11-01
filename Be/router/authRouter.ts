import express from "express"
import { SignInAuth, createAuth, viewUserAuth } from "../controller/authcontroller"



const Router = express.Router()

Router.route("/create-user").post(createAuth)
Router.route("/sign-in").post(SignInAuth)
Router.route("/view-user").get(viewUserAuth )

export default Router