const ignoreList = ["updated_at", "created_at"];

export function buildUpdateQuery({ tableName, obj, whereField }) {
  let paramQuery = 2;
  const values = [];

  let query = `UPDATE ${tableName} SET `;

  Object.keys(obj).forEach((el) => {
    if (el !== whereField && !ignoreList.includes(el)) {
      query += `${el} = $${paramQuery},`;
      paramQuery++;
      values.push(obj[el]);
    }
  });

  query += ` updated_at = NOW() WHERE ${whereField} = $1`;

  return { query, values };
}
