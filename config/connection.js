const mongoose = require('mongoose');
const devConfig = require('./process');


exports.connectdb = () => {
// The DataBase Connection
mongoose.Promise = global.Promise;
// mongodb://localhost/
const mongoCon = devConfig.localdb;  
mongoose.connect(mongoCon, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
};