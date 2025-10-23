import {pool} from '../db.js'


function initResult() {
  return {
    ok: false,
    data: ""
  }
}

const TABLE_NAME = "items"



async function GetAll(){
  const result = initResult();
  
  try{
    const res = await pool.query(`SELECT * FROM ${TABLE_NAME}`)

    result.ok = true
    result.data = res.rows

  }catch(e) {
    result.ok = false
    result.data = "Что-то пошло при получении всех категорий"
  }

  return result
}


async function Create(item) {
  const result = initResult();

  try {
    const res = await pool.query(
      `INSERT INTO ${TABLE_NAME} (image_url, name, description, count, grams, price, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      [item.image_url, item.name, item.description, item.count,item.grams,item.price,item.category_id]
    );

    if (!res.rowCount) {
      throw new Error("Что-то пошло не так при создании нового блюда, попробуйте попозже");
    }

    result.ok = true;
    result.data = res.rows[0].id;

  } catch (e) {
    result.ok = false;
    if ("severity" in e && e.severity === "ERROR") {
        if(e.detail?.includes("exists")) {
            result.data = "Такое блюдо уже существует";
        }
        if(e.code === '23503') {
            result.data = "Проверьте правильность указананной категории для блюда";
        }
    }  
  
    else {
      result.data = e.message || e;
    }

  }

  return result;
}


async function Delete(id) {
    const result = initResult();

    try {
      const res = await pool.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1`, [id])
      
      if(res.rowCount < 1) {
        throw new Error("Не удалось удалить блюдо, пожалуйста проверьте предоставленные данные!")
      }

      result.ok = true
      result.data = "Блюдо с id: " + id + " успешно удалено"

    }catch(e) {
      result.ok = false
      result.data = e.message || "Что-то пошло не так"
    }

    return result
}



export const itemsRepo = {
    Delete,
    Create,
    GetAll
}