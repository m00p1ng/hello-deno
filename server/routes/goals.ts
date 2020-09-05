import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getAllGoals,
  getSingleGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goals_controller.ts";

const router = new Router();

router.get("/", getAllGoals);
router.get("/:goalId", getSingleGoal);
router.post("/add-goal", createGoal);
router.post("/update-goal", updateGoal);
router.post("/:goalId", deleteGoal);

export default router;
