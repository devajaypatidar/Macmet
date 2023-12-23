const mongoose = require('mongoose');

// Replace 'your-database-name' with the actual name of your MongoDB database
const dbName = 'your-database-name';

// MongoDB connection URI
const uri = "mongodb://ajaypatidar2112:ajay2112@ac-ajgnqve-shard-00-00.rxogy1c.mongodb.net:27017,ac-ajgnqve-shard-00-01.rxogy1c.mongodb.net:27017,ac-ajgnqve-shard-00-02.rxogy1c.mongodb.net:27017/?ssl=true&replicaSet=atlas-v2kwo0-shard-0&authSource=admin&retryWrites=true&w=majority";

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
};

// Connect to MongoDB
mongoose.connect(uri, options);

const db = mongoose.connection;

// Event listeners for MongoDB connection events
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the database connection for reuse in other parts of your application
module.exports = db;
