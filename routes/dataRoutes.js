import express from "express";
import {getDataController} from "../controllers/dataController.js"

const router = express.Router();

//routes
router.get('/data',  getDataController)


export default router;