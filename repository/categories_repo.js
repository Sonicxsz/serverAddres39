import {pool} from '../db.js'


function initResult() {
  return {
    ok: false,
    data: ""
  }
}

const TABLE_NAME = "categories"



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


async function Create(category) {
  const result = initResult();

  try {
    const res = await pool.query(
      `INSERT INTO ${TABLE_NAME} (code, name, is_mini) VALUES ($1, $2, $3) RETURNING id`,
      [category.code, category.name, category.is_mini]
    );

    if (!res.rowCount) {
      throw new Error("Что-то пошло не так при создании новой категории");
    }

    result.ok = true;
    result.data = res.rows[0].id;

  } catch (e) {
    result.ok = false;

    if ("severity" in e && e.severity === "ERROR" && e.detail?.includes("exists")) {
      result.data = "Такая категория уже существует";
    } else {
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
        throw new Error("Не удалось удалить категорию, пожалуйста проверьте предоставленные данные!")
      }

      result.ok = true
      result.data = "Категория с id: " + id + " успешно удалена"

    }catch(e) {
      result.ok = false
      result.data = e.message || "Что-то пошло не так"
    }

    return result
}



export const categoriesRepo = {
    Delete,
    Create,
    GetAll
}