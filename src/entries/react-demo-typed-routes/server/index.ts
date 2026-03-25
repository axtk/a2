import { Router } from "express";
import { render } from "./render.tsx";
import { root } from "../const/root.ts";

export let server = Router();

const urls = [
  root,
  `${root}/about`,
  `${root}/sections/:id`,
];

server.get(urls, render());
