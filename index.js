const { ApolloServer, gql } = require('apollo-server');

//Source of data, for this example I set a hardcoded dataset
const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
];

//the schema tells th structure of the graphql object
const typeDefs = gql`
    type Book{
        title: String
        author: String
    }

    type Query{
        books: [Book]
    }
`;

//The resolvers set how to fetch the data
const resolvers = {
    Query:{
        books: () => books,
    },
};

//Initialize the apollo server
//The apollo server constructor requires two parameters:
//definition (schema) and your set of resolvers
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});