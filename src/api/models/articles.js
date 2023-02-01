import { query } from '../../db/index.js';

const dbGetAllArticles = async () => {
  const { rows } = await query('SELECT * from articles;');
  return rows;
};

export default dbGetAllArticles;
