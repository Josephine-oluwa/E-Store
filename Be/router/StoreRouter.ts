import express from "express"
import { createProduct, viewAllProduct, viewProduct } from "../controller/storeController"

const Router = express.Router()

Router.route("/create-product").post(createProduct)
Router.route("view-product").get(viewProduct)
Router.route("/view-products").get(viewAllProduct)

export default Router