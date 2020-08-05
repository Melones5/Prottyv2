import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//www.minhaapi.com.br
//localhost:8080/users (rutas)
//localhost:8080/contact (rutas)

//métodos http

//GET: buscamos o listamos alguna información
//POST: crear alguna informacion nueva
//PUT: actualizar una informacion existenta
//DELETE: borrar una informacion existente


//Cuerpo de la request(Request Body): datos para crear o realizar actualizacion de un registro
//Route Params: identificar cual recurso quiero actualizar o borrar
//Query Params: paginacion, filtros y metodos de ordenamiento

app.listen(8080);