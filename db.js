const { Sequelize, STRING, NUMBER } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});
const newUser = new sequelize.create({
    name: STRING,
    email: STRING
})
const newBoard = new sequelize.create({
    type: STRING,
    description: STRING,
    rating: NUMBER
})
const cheese = new sequelize.create({
    title: STRING,
    description: STRING
})
newBoard.belongsTo(newUser);
newUser.hasMany(newBoard);

newUser.belongsToMany(cheese, {through: "newUser_cheese"});
cheese.belongsToMany(newUser, {through: "newUser_cheese"});
module.exports = sequelize;
