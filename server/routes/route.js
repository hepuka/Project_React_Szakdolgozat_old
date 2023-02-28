import express from "express";
import {
  addUser,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} from "../controller/user-controller.js";

import {
  addDrink,
  addCoffee,
  addCake,
  getDrinks,
  getCoffees,
  getCakes,
} from "../controller/drink-controller.js";

import { getOrders } from "../controller/order-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
// router.get("/:id", getUser);
router.get("/add/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.post("/adddrink", addDrink);
router.post("/addcoffee", addCoffee);
router.post("/addcake", addCake);
router.get("/allproducts", getDrinks);
router.get("/allproducts", getCoffees);
router.get("/allproducts", getCakes);
router.get("/orders", getOrders);
export default router;
