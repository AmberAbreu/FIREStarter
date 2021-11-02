const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;
const { requireToken } = require("./gateKeepingMiddleware");

//get USER
router.get("/", requireToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findOne({
      where: {
        id: userId,
      },
      //include: Budget
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});
