const allDeleteController = require("../../controllers/SalesCart/allDeleteController")

const allDelete = async(req,res) => {
    const {userId} = req.params
    try {
        const products = await allDeleteController(userId)
        res.status(200).json(products)
    } 
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = allDelete