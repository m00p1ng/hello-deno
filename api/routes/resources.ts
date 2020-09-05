import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getResources,
  addResources,
  updateResources,
  deleteResources,
} from "../controllers/resources.ts";

const router = new Router();

router.get("/resources", getResources);
router.post("/resources", addResources);
router.patch("/resources/:resourceId", updateResources);
router.delete("/resources/:resourceId", deleteResources);

export default router;
