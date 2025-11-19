// products.resolvers.js
// Resolvers connect GraphQL queries/mutations to the products model

const productsModel = require('./products.model');

module.exports = {
  Query: {
    // Fetch all products
    products: () => productsModel.getAllProducts(),

    // Fetch products within a price range
    productsByPrice: (_, args) => productsModel.getProductsByPrice(args.min, args.max),

    // Fetch a single product by ID
    product: (_, args) => productsModel.getProductById(args.id),
  },

  Mutation: {
    // Add a new product
    addNewProduct: (_, args) =>
      productsModel.addNewProduct(args.id, args.description, args.price),

    // Add a new review to a product
    addNewProductReview: (_, args) =>
      productsModel.addNewProductReview(args.id, args.rating, args.comment),
  }
};
