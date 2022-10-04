import express from "express";
import {graphqlHTTP} from "express-graphql"; //Middleware de Graphql que me ayuda al entrar a una ruta sea procesada utilizadando Graphql
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "JEJEJE",
  });
});

// Se crea esta funcion para poder utilizar la herramienta de schema
app.use("/graphql", graphqlHTTP({
    graphiql: true, // Herramienta para hacer consultas
    schema
}));

app.listen(3000, () => console.log("Server on port 3000"));
