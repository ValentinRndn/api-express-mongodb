const { MongoClient } = require('mongodb');

// URL de connexion à la base de données MongoDB
const url = 'mongodb://127.0.0.1:27017';

const dbName = 'api-mongo';

async function insererDonnees() {
    // Connexion à la base de données
    const client = new MongoClient(url);
    await client.connect();

    try {
        // Sélectionner la base de données
        const db = client.db(dbName);

        // Sélectionner la collection
        const collection = db.collection('users');

        const result = db.collection.find({});
        
        // collection.insertOne() / collection.find() / collection.deleteMany() …

    } finally {
        // Fermer la connexion
        await client.close();
    }
}