const moongose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

moongose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('DB connection succesfull');
  });

//4) START SERVER
const port = process.env.PORT || 3000;
app.listen(port, 'localhost', () => {
  console.log(`App running on port ${port}...`);
});
