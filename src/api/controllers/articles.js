import dbGetAllArticles from '../models/articles.js';

const getAllArticles = async (req, res) =>
  res.status(200).json(await dbGetAllArticles());

export default getAllArticles;
