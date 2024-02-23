const { MongoClient } = require('mongodb');


// URL de connexion à la base de données MongoDB
const url = 'mongodb://127.0.0.1:27017';

const dbName = 'api-mongo';

// Fonction pour créer un utilisateur
exports.register = async (req, res) => {
    const client = new MongoClient(url);
    await client.connect();


    try {
        const db = client.db(dbName);
        let user = req.body;
        const newUser = db.collection('users');
        const result = newUser.insertOne(user);
        res.status(200).json({ message: 'Utilisateur créé avec succès.', insertedId: newUser.insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur.' });
    }
}


module.exports = exports;