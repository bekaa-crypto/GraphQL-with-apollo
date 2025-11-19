// products.model.js
// Mock data for products and reviews

const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
  }
];

/**
 * Returns all products.
 */
function getAllProducts() {
  return products;
}

/**
 * Returns products filtered by price range.
 * @param {number} min - Minimum price
 * @param {number} max - Maximum price
 */
function getProductsByPrice(min, max) {
  return products.filter(product => product.price >= min && product.price <= max);
}

/**
 * Returns a product by its ID.
 * @param {string} id - Product ID
 */
function getProductById(id) {
  return products.find(product => product.id === id);
}

/**
 * Adds a new product to the products array.
 * @param {string} id 
 * @param {string} description 
 * @param {number} price 
 */
function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: []
  };
  products.push(newProduct);
  return newProduct;
}

/**
 * Adds a review to a product.
 * @param {string} id - Product ID
 * @param {number} rating 
 * @param {string} comment 
 */
function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductById(id);

  if (matchedProduct) {
    const newProductReview = { rating, comment };
    matchedProduct.reviews.push(newProductReview);
    return newProductReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
