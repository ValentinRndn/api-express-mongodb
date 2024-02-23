const { MongoClient} = require('mongodb');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path : '.env.local'});

// URL de connexion à la base de données MongoDB
const url = 'mongodb://127.0.0.1:27017';

const jwtSecretKey = process.env.TOKEN_KEY;

const dbName = 'api-mongo';

//Fonction pour authentifier un utilisateur

exports.authentification = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    const client = new MongoClient(url);
    
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("users");
      const user = await collection.findOne({ email: email });
  
      if (user && user.password === password) {
        // Passwords match, authentication successful
        const token = jwt.sign({ email: user.email }, jwtSecretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        // Either user not found or password incorrect
        res.status(401).json("Identifiants incorrects");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    } finally {
      // Ensure to close the connection
      await client.close();
    }
  };

module.exports = exports;