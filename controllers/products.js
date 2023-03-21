const getAllProducts = async(req, res) =>{
    res.status(200).json({msg:"Getting all products"})
}

const getAllProductsTesting = async(req, res) =>{
    res.status(200).json({msg:"Getting all products for testing"})
}

module.exports = {getAllProducts, getAllProductsTesting}