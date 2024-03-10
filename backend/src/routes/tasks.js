
const {
  validationMiddleware,
} = require("../middlewares/validation-middleware");
const { userAuth } = require("../middlewares/passport-middleware");
const { Router } = require("express");
const { getTasks } = require("../controllers/milestones");
const { createTask , updateTaskStatus}  = require("../controllers/task")
const {getMilestones} = require("../controllers/milestones")
const router = Router();

router.post("/get-tasks", userAuth, getTasks);
router.post("/create-task",userAuth ,createTask )
router.post("/update-task-status",userAuth, updateTaskStatus )


module.exports = router; 