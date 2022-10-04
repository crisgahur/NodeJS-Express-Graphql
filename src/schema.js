import { makeExecutableSchema } from "graphql-tools"; // Permite crear un nuevo esquema que une al resolvers y al typeDefs
import { resolvers } from "./resolvers";

const typeDefs = `
   type Query {
    hello: String,
    greet(name: String!): String,
    peoples: [People]

}
type People {
    _id: ID
    name: String!
    password: String!
    phone: Int

}

type Mutation {
createPeople(input: PeopleInput): People
}

input PeopleInput{
    name: String!
    password: String!
    phone: Int
}
`; //typeDefs: Definición de tipos. Se define que se podrá consultar desde una GraphQL.
//typeMutation: Permite hacer una modificación a la BD desde el lado del cliente

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
