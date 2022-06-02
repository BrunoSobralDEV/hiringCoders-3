import express from 'express';
import cors from 'cors';

const server = express();


server.get('/status', (_, res) => {
  res.send({
    status: 'Okay',
  })
})

const enableCors = cors({origin: 'http://localhost:3000'});

server
  .options('/authenticate', enableCors)
  .post('/authenticate', enableCors, express.json(), (req, res) => {
  console.log('E-mail', req.body.email, 'Senha', req.body.password)

  res.send({
    Okay: true,
  });
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';


server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})