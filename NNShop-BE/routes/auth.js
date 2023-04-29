const authController = require("../controllers/AuthController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();
//register
router.post("/register", authController.registerUser);
//login
router.post("/login", authController.loginUser);
//refresh
router.post("/refresh", authController.requestRefreshToken);
//log out
router.post("/logout",middlewareController.verifyToken ,authController.userLogout);
module.exports = router;