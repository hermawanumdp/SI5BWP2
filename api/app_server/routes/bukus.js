var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/check-auth");
const BukuController = require("../controller/buku");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });
//insert
router.post("/", checkAuth, BukuController.createBuku);

//select
router.get("/", checkAuth, BukuController.readBuku);

//delete
router.delete("/:id", checkAuth, BukuController.deleteBuku);

//update
router.put("/:id", checkAuth, BukuController.updateBuku);

module.exports = router;
