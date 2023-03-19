import express from "express";
const router = express.Router();

import fs from "fs";

router.get("/Movies", function (req, res, next) {
  const data = fs.readFileSync("./data/movies.json");
  res.json(JSON.parse(data));
});

router.post("/addMovie", function (req, res, next) {
  const data = fs.readFileSync("./data/movies.json");
  const json = JSON.parse(data);
  json.push(req.body);
  fs.writeFileSync("./data/movies.json", JSON.stringify(json));

  res.send(true);
});

router.post("/deleteMovie", function (req, res, next) {
  const data = fs.readFileSync("./data/movies.json");
  let json = JSON.parse(data);
  json = json.filter((e) => {
    return e.id !== req.body.id;
  });
  fs.writeFileSync("./data/movies.json", JSON.stringify(json));
  res.send(true);
});

router.post("/editMovie", function (req, res, next) {
  const data = fs.readFileSync("./data/movies.json");
  let json = JSON.parse(data);
  json = json.map((e) => {
    if (e.id === req.body.id) {
      return req.body.data;
    }
    return e;
  });
  fs.writeFileSync("./data/movies.json", JSON.stringify(json));
  res.send(true);
});
export default router;
