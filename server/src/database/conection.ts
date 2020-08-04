import knex from 'knex';
import path from 'path';

//migrations : controlan las versiones dentro de la base de datos

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;
