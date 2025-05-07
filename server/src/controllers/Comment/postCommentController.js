const { Comments } = require("../../db");

const postCommentController = async (user_id, product_id, comment, rating) => {

    if (!user_id || !product_id) {
        throw new Error("userId y productId son obligatorios");
    }

    const newComment = await Comments.create({
        user_id,
        product_id,
        comment,
        rating
    });

    return newComment;
};

module.exports = postCommentController;
