const express = require("express")
const router = express.Router()
const transaction = require("../controllers/transaction.controller");

router.post("/", transaction.create);

router.get("/", transaction.findAll);

router.delete("/", transaction.deleteAll);

module.exports = router;
