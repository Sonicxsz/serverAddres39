/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  // === 1. Категории ===
  pgm.createTable('categories', {
    id: 'id',
    code: { type: 'varchar(100)', notNull: true, unique: true }, // 'breakfast', 'salads', etc.
    name: { type: 'varchar(255)', notNull: true }, // 'Завтраки до 14:00'
    is_mini: { type: 'boolean', notNull: true, default: false },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('now()') },
    updated_at: { type: 'timestamp', notNull: true, default: pgm.func('now()') },
  });

  // === 2. Товары (блюда) ===
  pgm.createTable('items', {
    id: 'id',
    category_id: {
      type: 'bigint',
      notNull: true,
      references: 'categories(id)',
      onDelete: 'CASCADE',
    },
    name: { type: 'varchar(255)', notNull: true }, // Название блюда
    description: { type: 'text' }, // Например: "Цукини, яйцо, лосось слабосоленый..."
    price: { type: 'decimal(10,2)', notNull: true },
    grams: { type: 'integer' },
    count: { type: 'integer', notNull: true, default: 1 },
    image_url: { type: 'text' },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('now()') },
    updated_at: { type: 'timestamp', notNull: true, default: pgm.func('now()') },
  });

  // === 3. Модификаторы (варианты блюд) ===
  pgm.createTable('item_modifiers', {
    id: 'id',
    item_id: {
      type: "bigint",
      notNull: true,
      references: 'items(id)',
      onDelete: 'CASCADE',
    },
    option_name: { type: 'varchar(255)', notNull: true }, // "на гриле", "на пару"
  });
};

export const down = (pgm) => {
  pgm.dropTable('item_modifiers');
  pgm.dropTable('items');
  pgm.dropTable('categories');
};


