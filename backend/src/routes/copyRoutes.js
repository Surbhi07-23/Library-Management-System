import express from "express";

import {
    addCopy ,
    getAllCopies
} from "../controllers/CopyController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/" , addCopy);

router.get("/" , getAllCopies);

export default router;
