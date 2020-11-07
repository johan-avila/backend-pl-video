const bcrypt = require('bcrypt');
const MongoLib = require('../../lib/mongodb');
const { config } = require('../../config/index');
const mongoDB= new MongoLib()


const users = [
  {
    email: 'root@undefined.sh',
    name: 'ROOT',
    password: config.default_admin_password,
    isAdmin: true
  },
  {
    email: 'jose@undefined.sh',
    name: 'Jose Maria',
    password: config.default_user_password
  },
  {
    email: 'maria@undefined.sh',
    name: 'Maria Jose',
    password: config.default_user_password
  }
];

async function createUser(user) {
  const { name, email, password, isAdmin } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  const userId = await mongoDB.createOne('users', {
    name,
    email,
    password: hashedPassword,
    isAdmin: isAdmin
  });

  return userId;
}

console.log(createUser(users[2]));