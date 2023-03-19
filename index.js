import express from "express";
import path from "path";
import router from "./Routes/main.js";
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
// app.use("/users", usersRouter);
app.listen(3000, () => {
  console.log("app started");
});

export default app;
