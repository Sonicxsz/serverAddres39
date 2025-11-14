import { Router } from "express";
import { images } from "../gallery.js";
import { items } from "../items.js";
import {
  AddCategory,
  DeleteCategory,
  GetAllCategories,
  UpdateCategory,
} from "../services/category_service.js";
import {
  AddImageToItem,
  AddItem,
  DeleteItem,
  GetAllItems,
} from "../services/items_service.js";
import {
  AddModifier,
  DeleteModifier,
  GetAllModifiers,
} from "../services/modifier_service.js";

export const router = Router();

router.get("/items", (req, res) => {
  const newItems = JSON.stringify(items);
  res.send(newItems);
});

router.get("/images", (req, res) => {
  const newItems = JSON.stringify(images);
  res.send(newItems);
});

// КАТЕГОРИИ
router.post("/category", AddCategory);
router.get("/category/all", GetAllCategories);
router.delete("/category/:id", DeleteCategory);
router.patch("/category", UpdateCategory);

// БЛЮДА
router.post("/items", AddItem);
// router.patch("/items", AddItem);
router.get("/items/all", GetAllItems);
router.delete("/items/:id", DeleteItem);
router.post("/items/add-image", AddImageToItem);

// МОДИФИКАТОРЫ
router.post("/modifier", AddModifier);
router.delete("/modifier/:id", DeleteModifier);
router.get("/modifier/all", GetAllModifiers);
