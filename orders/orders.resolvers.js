// orders.resolvers.js
// Connect GraphQL queries to the orders model

const ordersModel = require("./orders.model");

module.exports = {
  Query: {
    // Resolver for the `orders` query
    orders: () => {
      return ordersModel.getAllOrders();
    },
  },
};
