const postHistoryController = require("../../controllers/PurchaseHistory/postHistoryController");

const postHistoryHandler = async (req, res) => {
  const { cartItems } = req.body;
  const { userId } = req.params;
  try {
    const updateProduct = cartItems.map((item) => ({
      cantidad: item.quantity,
      idProd: item.idProduct,
    }));
    const newPurchase = await postHistoryController(updateProduct, userId);
    res.status(200).send(newPurchase);
  } catch (error) {
    res.status(500).send("error al agregar compra");
  }
};

module.exports = postHistoryHandler;
