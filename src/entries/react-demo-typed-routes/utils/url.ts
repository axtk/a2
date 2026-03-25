import { createURLBuilder } from "url-shape";
import z from "zod";
import { root } from "../const/root.ts";

export const url = createURLBuilder(root, {
  "/": z.object({}),
  "/about": z.object({}),
  "/sections/:id": z.object({
    params: z.object({ id: z.coerce.number() }),
  }),
});
