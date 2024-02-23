const express = require('express');

const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const checkToken = require('./middleware/checkToken');

const app = express();
app.use(express.json());
app.use(checkToken);
app.use('/user', userRoute);
app.use('/login', loginRoute);

app.listen(3000);
   
