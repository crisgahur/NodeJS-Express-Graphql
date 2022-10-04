import {peoples} from "./sample";

export const resolvers = {
  Query: {
    hello: () => {
      return "HOLA GONORREA";
    },
    greet(root, {name}) {
      return name;
    },

    peoples() {
        return peoples;
    },

  },

  Mutation : {
    createPeople(_,{ input }){
        input._id = peoples.length; // Metodo que recorre el array y asigna como ID la cantidad siguiente.
        peoples.push(input);
        return input;
    }
  }
};
