import { static as expressStatic, Router } from "express";

export let server = Router();

server.use("/files-demo/-", expressStatic("src/entries/files-demo/public"));

server.use(
  "/files-demo",
  expressStatic("src/entries/files-demo/content", {
    extensions: ["html"],
  }),
);
