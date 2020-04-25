const Router = require("koa-router");
const { Register, Login } = require("../controllers/user");

module.exports = new Router()
    .post("/register", Register)
    .post("/login", Login)