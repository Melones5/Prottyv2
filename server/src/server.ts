import express from 'express';

const app = express();

app.use(express.json());

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

app.get('/', (request, response) =>{

    return response.json({message: 'Hello world'})
});



app.listen(8080);