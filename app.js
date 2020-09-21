/* 
Built in Packages
*/
const express = require('express');
const {connectdb} = require('./config/connection');
const {setGlobalMiddlewares} = require('././src/middlewares/global-middlewares');
const devConfig = require('./config/process');
//
const restRouter = require('./src/index');
// PORT number and Hostname
const PORT = devConfig.PORT;
const hostname = 'localhost';
// express object
const app = express();

// Set up Database connection
connectdb();
// set global middlewares to handle the client requests
 app.use(express.static(__dirname + "/public"));
setGlobalMiddlewares(app);
// all app routers
app.use('/api', restRouter);
//set up the connection with the nodejs server
app.listen(PORT, () => {
console.log(`Asasa admin form is running at http://${hostname}:${PORT}`);
});