import express from "express";

import { getActiveIssues, getAllIssues, getOverdueBooks, issueBook , returnBook , getStudentIssues } from "../controllers/IssueController.js";

const router = express.Router();
router.post("/" , issueBook);

router.get("/" , getAllIssues);

router.put("/return/:issueId" , returnBook);

router.get("/active", getActiveIssues);

router.get("/student/:studentId" , getStudentIssues);

router.get("/overdue" , getOverdueBooks);

export default router;
