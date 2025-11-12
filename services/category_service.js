import { categoriesRepo } from "../repository/categories_repo.js";
import { Category, categoryUpdateValidator } from "../entities/category.js";

const { Create, Delete, GetAll, Update } = categoriesRepo;

export const AddCategory = async (req, res) => {
  const { code, name, is_mini } = req.body;
  const category = new Category(code, name, is_mini);

  const [hasError, errors] = category.isValid();
  if (hasError) {
    res.status = 400;
    res.json({ success: false, data: errors });
    return;
  }

  const result = await Create(category);

  if (!result.ok) {
    res.status = 500;
    res.json({ success: false, data: result.data });
    return;
  }
  res.status = 200;
  res.json({
    success: true,
    data: "Category successfully created id: " + result.data,
  });
};

export const UpdateCategory = async (req, res) => {
  const category = req.body;

  if (!category.id) {
    res.status = 400;
    res.json({ success: false, data: "Id must be provided" });
    return;
  }
  const validated = categoryUpdateValidator(category);

  if (!validated.isValid) {
    res.status = 400;
    res.json({ success: false, data: validated.errors });
    return;
  }

  const result = await Update(category);

  if (!result.ok) {
    res.status = 500;
    res.json({ success: false, data: result.data });
  }

  res.json({
    success: true,
    data: result.data,
  });
};

export const GetAllCategories = async (req, res) => {
  const result = await GetAll();
  if (!result.ok) {
    res.status = 500;
    res.json({ success: false, data: result.data });
    return;
  }
  res.json({ success: true, data: result.data });
};

export const DeleteCategory = async (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    res.status = 400;
    return res.json("category id is not provided");
  }

  const result = await Delete(id);

  if (!result.ok) {
    res.status = 500;
    res.json({ success: false, data: result.data });
    return;
  }

  res.status = 200;
  res.json({ success: true, data: result.data });
};
