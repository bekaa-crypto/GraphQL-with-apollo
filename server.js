// Core modules
const path = require("path"); // For handling file and directory paths
const express = require("express"); // Web framework for building APIs
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing (CORS)

// Apollo GraphQL imports
const { ApolloServer } = require("@apollo/server"); // Apollo Server class
const { expressMiddleware } = require("@apollo/server/express4"); // Middleware to integrate Apollo Server with Express

// GraphQL tools
const { loadFilesSync } = require("@graphql-tools/load-files"); // Utility to load schema and resolver files
const { makeExecutableSchema } = require("@graphql-tools/schema"); // Combine typeDefs and resolvers into executable schema

// Load all GraphQL type definitions (.graphql) and resolvers (.resolvers.js) recursively
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

// Async function to initialize and start the Apollo + Express server
async function startApolloServer() {
  const app = express(); // Create Express app

  // Build executable GraphQL schema from loaded typeDefs and resolvers
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  // Create Apollo Server instance
  const server = new ApolloServer({ schema });

  // Start Apollo Server before applying middleware
  await server.start();

  // Middleware setup
  app.use(cors()); // Enable CORS for all routes
  app.use(express.json()); // Parse incoming JSON requests

  // Mount GraphQL endpoint
  app.use("/graphql", expressMiddleware(server));

  // Start the Express server
  app.listen(3000, () => {
    console.log(`GraphQL server running at http://localhost:3000/graphql`);
  });
}

// Start the server
startApolloServer();
