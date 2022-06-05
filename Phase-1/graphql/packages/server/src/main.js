import express from 'express';
// import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';


async function startServer() {
  const server = new ApolloServer({
    typeDefs: gql`
      type Client {
        id: ID!
        name: String!
      }
  
      type Demand {
        id: ID!
        name: String!
        client: Client!
        deadline: String
      }  
  
      type Query {
        demands: [Demand]!
      }
    `
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: `http://${HOSTNAME}:${PORT}`,
    }
  });
}


// app.get('/status', (_, res) => {
//   res.send({
//     status: 'Okay',
//   })
// })

// const enableCors = cors({origin: 'http://localhost:3000'});

// app
//   .options('/authenticate', enableCors)
//   .post('/authenticate', enableCors, express.json(), (req, res) => {
//   console.log('E-mail', req.body.email, 'Senha', req.body.password)

//   res.send({
//     Okay: true,
//   });
// })




app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})