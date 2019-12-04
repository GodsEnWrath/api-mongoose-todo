const router = require("express").Router()

router.get("/", (req, res) => {
    res.status(200).send({message:"hello to my website"})
})

module.exports = router