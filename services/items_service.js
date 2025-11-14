import path from "path";
import { Item } from "../entities/item.js";
import { itemsRepo } from "../repository/items_repo.js";
import { modifierRepo } from "../repository/modifiers_repo.js";
import fs from "fs";
import sharp from "sharp";

const { Create, Delete, GetAll, Update, GetById } = itemsRepo;

const STATIC_FOLDER = "uploads";

export const AddImageToItem = async (req, res) => {
  try {
    const id = req.body.id;

    if (!id) {
      res.status(400).json({ success: false, data: "Id is not provided" });
    }

    if (!req.body.image) {
      return res
        .status(400)
        .json({ success: false, data: "No image provided" });
    }

    const item = await GetById(id);

    if (!item.ok) {
      res.status(400).json({ success: false, data: item.data });
      return;
    }

    const uploadDir = path.join(process.cwd(), STATIC_FOLDER);

    // Если есть изображение то необходимо удалить его из хранилища
    if (item.data.image_url) {
      fs.promises.unlink(uploadDir + "/" + item.data.image_url);
    }

    const image = checkBase64File(req.body.image);

    if (!image.ok) {
      res.status(400).json({
        success: false,
        data: "Not supported file type. Got: " + image.ext,
      });
      return;
    }

    const buffer = Buffer.from(image.clearedBase64, "base64");

    if (!fs.existsSync(uploadDir)) {
      await fs.promises.mkdir(uploadDir, { recursive: true });
    }

    const fileName = `img_${Date.now()}.${image.ext}`;
    const filePath = path.join(uploadDir, fileName);

    // Сжимаем изображение и сохраняем
    await sharp(buffer).resize({ width: 500 }).toFile(filePath);

    const result = await Update({ id, image_url: fileName });

    if (!result.ok) {
      res.status(500).json({ success: false, data: res.data });
      return;
    }

    res.json({
      success: true,
      file: `/${STATIC_FOLDER}/${fileName}`,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
  }
};

function checkBase64File(file, extensions = ["png", "jpg", "jpeg"]) {
  const result = {
    ok: false,
    ext: null,
    clearedBase64: null,
  };

  const regexp = /^data:image\/([a-zA-Z0-9]+);base64,/;
  const matches = file.match(regexp);

  if (!matches) return result;

  result.ext = matches[1];

  if (!extensions.includes(matches[1])) return result;

  result.clearedBase64 = file.replace(regexp, "");

  result.ok = true;

  return result;
}

export const AddItem = async (req, res) => {
  const { image_url, name, description, count, grams, price, category_id } =
    req.body;

  const item = new Item(
    image_url,
    name,
    description,
    count,
    grams,
    price,
    category_id,
  );

  const [hasError, errors] = item.isValid();

  if (hasError) {
    res.status = 400;
    res.json({
      success: false,
      message: `Data is not valid. ${errors.join(" ")}`,
    });
    return;
  }

  const result = await Create(item);

  if (!result.ok) {
    res.status = 500;
    res.json({ success: false, data: result.data });
    return;
  }

  res.status = 200;
  res.json({
    success: true,
    data: "Item successfully created id: " + result.data,
  });
};

export const GetAllItems = async (req, res) => {
  const result = await GetAll();
  if (!result.ok) {
    res.status = 500;
    res.json({ success: false, data: result.data });
    return;
  }

  const modifiers = await modifierRepo.GetAll();
  if (!modifiers.ok) {
    res.status = 500;
    res.json({ success: false, data: modifiers.data });
    return;
  }

  const itemsWithModifiers = result.data.map((item) => {
    const itemModifiers = modifiers.data.filter(
      (modifier) => modifier.item_id == item.id,
    );
    return { ...item, modifiers: itemModifiers };
  });

  res.status = 200;
  res.json({ success: true, data: itemsWithModifiers });
};

export const DeleteItem = async (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    res.status = 400;
    return res.json({ success: false, message: "category id is not provided" });
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
