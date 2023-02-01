import { query } from '../../db/index.js';

const dbGetAllProducts = async () => {
  const { rows } = await query(
    'Select products.item_number, products.name, products.description, products.image, products.price, products.discount, products.instock, c.name from products join category c on c.cat_id = products.cat_id'
  );
  return rows;
};

export default dbGetAllProducts;
