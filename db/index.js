const Sequelize = require('sequelize'); 
const { STRING, UUID, UUIDV4 } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');

const User = conn.define('user', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: {
    type: STRING,
    unique: true,
    allowNull: false
  }
});

const Thing = conn.define('thing', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: {
    type: STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = {
  conn,
  User,
  Thing
};
