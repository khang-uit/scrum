const router = require("express").Router();

//import module
const content = require("./content");

//routing
router.use("/content", content);

module.exports = router;
