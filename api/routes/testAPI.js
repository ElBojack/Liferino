var express = require("express");
var router = express.Router();

/* GET test page */
router.get("/", function(req, res, next) {
    res.send("William rend moi mes 25 bales");
});

module.exports = router;
