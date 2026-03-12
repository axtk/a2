import { dir } from "appstage";
import { static as expressStatic, Router } from "express";

export let server = Router();

server.use("/main/-", expressStatic("src/entries/main/public"));

server.get(
  "/",
  dir({
    path: "src/entries/main",
    name: "index",
  }),
);
