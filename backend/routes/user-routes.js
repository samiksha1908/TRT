import express  from "express";

const router = express.Router();

router.get("/", getAllUser);

export default router;