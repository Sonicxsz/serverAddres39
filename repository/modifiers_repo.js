import {pool} from '../store/db.js'


function initResult() {
  return {
    ok: false,
    data: ""
  }
}

const TABLE_NAME = "item_modifiers"



async function GetAll(){
  const result = initResult();
  
  try{
    const res = await pool.query(`SELECT * FROM ${TABLE_NAME}`)

    result.ok = true
    result.data = res.rows

  }catch(e) {
    result.ok = false
    result.data = "Что-то пошло при получении всех модификаторов"
  }

  return result
}

async function Create(modifier) {
  const result = initResult();

  try {
    const res = await pool.query(
      `INSERT INTO ${TABLE_NAME} (item_id, option_name) VALUES ($1, $2) RETURNING id`,
      [modifier.item_id, modifier.option_name]
    );

    if (!res.rowCount) {
      throw new Error("Что-то пошло не так при создании нового модификатора, попробуйте попозже");
    }

    result.ok = true;
    result.data = res.rows[0].id;

  } catch (e) {
    result.ok = false;
    if ("severity" in e && e.severity === "ERROR") {
        if(e.detail?.includes("exists")) {
            result.data = "Такой модификатор уже существует";
        }
        if(e.code === '23503') {
            result.data = "Проверьте правильность указананного блюда для модификатора";
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
        throw new Error("Не удалось удалить модификатор, пожалуйста проверьте предоставленные данные!")
      }

      result.ok = true
      result.data = "Модификатор с id: " + id + " успешно удален"

    }catch(e) {
      result.ok = false
      result.data = e.message || "Что-то пошло не так"
    }

    return result
}



export const modifierRepo = {
    Delete,
    Create,
    GetAll
}