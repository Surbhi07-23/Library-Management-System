import express from "express";
import cors from "cors";
import dotenv  from "dotenv";

import connectDB from "./src/config/db.js";

import bookRoutes from "./src/routes/bookRoutes.js";

import copyRoutes from "./src/routes/copyRoutes.js";

import issueRoutes from ".//src/routes/issueRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/books" , bookRoutes);

app.use("/api/copies" , copyRoutes);

app.use("/api/issues" , issueRoutes);

app.get("/", (req,res) => {
    res.send("api running")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`App is running on port ${PORT}`)
});