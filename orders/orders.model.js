// orders.model.js
// Mock orders data for demonstration

const orders = [
  {
    date: "2005-05-05",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

/**
 * Returns all orders.
 * In real apps, replace this with database queries.
 */
function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
