const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  updateRole,
  deleteUser,
  deleteAllUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.put("/role/:id", updateRole);
router.delete("/:id", deleteUser);
router.delete("/", deleteAllUser);

module.exports = router;
