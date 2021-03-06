import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'
import resolvers from './resolvers';

const app = express();

app.get('/', (request, response) => {
    response.send('Graph QL');
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => {
    console.log("Server running on port localhost:8080/graphql")
})