import express from "express";

import {
    createBook,
    getBook
} from "../controllers/BookController.js";

const router =  express.Router();

router.post("/" , createBook);
router.get("/" , getBook);

export default router;