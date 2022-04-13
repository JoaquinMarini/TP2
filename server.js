import express from 'express'
import { listen } from 'express/lib/application';
import pizzaController from ''

const server = express();
const puerto = 2548;

server.use(express.json());
server.use('/pizza', pizzaController)

server.listen(puerto, () => {
    console.log(`This is a server on the port ${puerto}`)
})

/*server.listen((param1, param2, param3) => {
    console.log("hola");
})*/

// string variable;
// const variable: string;