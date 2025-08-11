import express from "express";
import { createForm, getForm } from "../controllers/formController.js";

const router = express.Router();

router.post("/", createForm);
router.get("/:id", getForm);

export default router;
