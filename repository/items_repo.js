import {pool} from '../store/db.js'


function initResult() {
  return {
    ok: false,
    data: ""
  }
}

const TABLE_NAME = "items"


async function GetById(id) {
  const result = initResult();

  try{
    const res = await pool.query(`SELECT id, category_id, name, description, price, grams, count, image_url FROM ${TABLE_NAME} WHERE id = $1`, [id])
    const finded = res.rows[0]

    if(!finded) {
      throw new Error("Не удалось найти item по id " + id)
    }


    result.ok = true
    result.data = finded
  }catch(e) {
    result.ok = false
    result.data = "Что-то пошло при получении item"
  }

  return result

}


async function GetAll(){
  const result = initResult();
  
  try{
    const res = await pool.query(`SELECT id, category_id, name, description, price, grams, count, image_url FROM ${TABLE_NAME}`)

    result.ok = true
    result.data = res.rows

  }catch(e) {
    result.ok = false
    result.data = "Что-то пошло при получении всех item"
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



async function Update(item) {
    const result = initResult();
    try{
      
      const data = buildUpdateQuery(item, item.id)
      
      const res = await pool.query(data.query, data.values)
      
      if(res.rowCount < 1) {
        throw new Error("Не удалось обновить данные, пожалуйста попробуйте позже")
      }

      result.ok = true

    }catch(e) {
      result.ok = false
      result.data = e.message || "Что-то пошло не так"
    }

    return result
}

function buildUpdateQuery(data, whereValue) {
  const keys = Object.keys(data).filter(el => el !== 'id')
  const fields = keys.map((el, ind) => `${el} = $${ind +2}`)
  const query = `UPDATE ${TABLE_NAME} SET ${fields.join(', ')} WHERE id = $1`
  
  return {
    query, 
    values: [whereValue, ...keys.map(el => data[el])]
  }
}



export const itemsRepo = {
    Delete,
    Create,
    GetAll,
    GetById,
    Update
}