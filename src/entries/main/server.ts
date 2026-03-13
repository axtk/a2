import { static as expressStatic, Router } from "express";

export let server = Router();

server.use("/main/-", expressStatic("src/entries/main/public"));
server.use("/", expressStatic("src/entries/main/content"));
