const { MongoClient} = require('mongodb');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path : '.env.local'});

// URL de connexion à la base de données MongoDB
const url = 'mongodb://127.0.0.1:27017';

const dbName = 'api-mongo';

//Fonction pour authentifier un utilisateur

exports.authentification = async (req, res) => {

    const login= req.body.email;
    const password = req.body.password;
    const client = new MongoClient(url);
    await client.connect();

    try {
        const db = client.db(dbName);
        const collection = db.collection('users');
        const user = await collection.find({ login, password });
        if (!user) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
        }
        const token = jwt.sign({ email: user.email }, process.env.TOKEN_KEY, { expiresIn: '24h' });
        res.status(200).json({ message: 'Authentification réussie.', token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de l\'authentification.' });
    } finally {
        await client.close();
    }
}

module.exports = exports;