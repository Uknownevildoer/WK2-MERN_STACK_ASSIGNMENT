const express = require('express')

const router = express.Router()
const authMiddleware = require('./midddleware/authorise')



const {
    getProducts,
    getproduct,
    createProduct,
    updateProducts,
    deleteProduct
} = require('../controllers/productsControllers')

router.get('/',getProducts);
router.get('/:id',getproduct)
router.post('/',authMiddleware,createProduct) 
router.put('/:id',updateProducts)
router.delete('/:id',deleteProduct);

module.exports = router