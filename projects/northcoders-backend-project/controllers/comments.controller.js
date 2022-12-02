const { deleteCommentById } = require('../models/comments.model');

exports.removeCommentById = async (req, res, next) => {
  try {
    const { comment_id } = req.params;
    await deleteCommentById(comment_id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
