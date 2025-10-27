import express from "express";
import {
  showContactForm,
  submitContactForm,
} from "../controllers/contact.controller.js";
export const router = express.Router();

router.get("/", showContactForm);
router.post("/submit", submitContactForm);
