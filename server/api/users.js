const router = require("express").Router();
const {
  models: { User },
} = require("../db");

const { requireToken } = require("./gateKeepingMiddleware");

//get USER
router.get("/", requireToken, async (req, res, next) => {
  try {
    console.log("baufinewjfnw");
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

router.post("/", async (req, res, next) => {
  try {
    // Authorization & Security (Prevent Injection Attacks)
    // We only want to take information that is given through username and password
    // for example, someone can use postman to change the admin field and make themselves admin
    const { email, password, firstName, lastName } = req.body;
    console.log("hello");
    res
      .status(201)
      .send(await User.create({ email, password, firstName, lastName }));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
