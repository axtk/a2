import { createApp, unhandledError, unhandledRoute } from "appstage";
import { static as expressStatic } from "express";
import { entries } from "./autoentries.ts";

let app = createApp();

app.use(
  expressStatic("src/public"),
  entries,
  unhandledRoute(),
  unhandledError(),
);
