import express from "express";

const HttpStatus501 = {
	code: 501,
	status: "not implemented",
};

const router = express.Router();

router.get("/", (req, res) => {
	return res.status(HttpStatus501.code).json(HttpStatus501);
});

router.get("/:id", (req, res) => {
	return res.status(HttpStatus501.code).json(HttpStatus501);
});

router.post("/", (req, res) => {
	return res.status(HttpStatus501.code).json(HttpStatus501);
});

router.put("/:id", (req, res) => {
	return res.status(HttpStatus501.code).json(HttpStatus501);
});

router.delete("/:id", (req, res) => {
	return res.status(HttpStatus501.code).json(HttpStatus501);
});

export default router;
