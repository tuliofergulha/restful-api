'use restrict'

const ProductModel = require('../models/product');

const transformer = product => ({
    type: 'products',
    id: product.id,
    attributes: {
        name: product.name,
        price: product.price,
    },
    links:{
        self: `/api/v1/products/${product.id}`
    }
});

const getById = async (req, h) => {
    const product = await ProductModel.findById(req.params.id);
    return { data: transformer(product) };
}

const get = async (req, h) => {
   const products = await ProductModel.find({});
   return { data: products.map(transformer) };
};

const save = async (req, h) => {
    const { name, price } = req.payload;
    
    const product = new ProductModel;
    product.name = name;
    product.price = price;
    
    await product.save();

    return h.response({ data: transformer(product) }).code(201);
};

const update = async (req, h) => {
    const updateProduct = req.payload;
    await ProductModel.findByIdAndUpdate(req.params.id, updateProduct);
    return h.response({ data: transformer(updateProduct) });    
}

const remove = async (req, h) => {
    await ProductModel.findByIdAndDelete(req.params.id);
    return h.response().code(204);
};

module.exports ={
    getById,
    get,
    save,
    update,
    remove
};