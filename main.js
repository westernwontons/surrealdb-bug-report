import { Surreal } from 'surrealdb.js';

const db = new Surreal();

async function main() {
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

    const result = await db.query('SELECT * FROM product WHERE id INSIDE $ids', {
        ids: ['product:1'],
    });
    console.log(result);
}

main().finally(() => db.close());
