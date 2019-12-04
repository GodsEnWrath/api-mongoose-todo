const router = require("express").Router();

router.get("/:email", require("./controller").getAll);
router.post("/", require("./controller").addOne);
router.delete("/:id", require("./controller").deleteOne);
router.put("/:id", require("./controller").updateOne);



module.exports = router;