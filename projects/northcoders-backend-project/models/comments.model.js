const db = require('../db/connection');

exports.deleteCommentById = async (comment_id) => {
  const { rows } = await db.query('DELETE FROM comments WHERE comment_id = $1 RETURNING *', [comment_id]);
  if (rows.length === 0) return Promise.reject({ status: 404, message: 'Invalid Comment ID' });
  return rows[0];
};
