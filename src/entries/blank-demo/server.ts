import { Router } from "express";
import { render } from "./render.ts";

export let server = Router();

server.get("/blank-demo", render());
