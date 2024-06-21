import { Surreal } from 'surrealdb.js';

const db = new Surreal();

async function seed() {
    await db.connect(process.env.AUTH_SURREALDB_CONNECTION, {
        // Set the namespace and database for the connection
        namespace: process.env.AUTH_SURREALDB_NS,
        database: process.env.AUTH_SURREALDB_DB,
        // Set the authentication details for the connection
        auth: {
            ns: process.env.AUTH_SURREALDB_NS,
            db: process.env.AUTH_SURREALDB_DB,
            username: process.env.AUTH_SURREALDB_USERNAME,
            password: process.env.AUTH_SURREALDB_PASSWORD,
        },
    });

    await db.create('product', {
        id: 1,
        name: 'basket',
    });
}

seed().finally(() => db.close());
