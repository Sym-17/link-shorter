const { Sequelize } = require('sequelize');

// // Option 3: Passing parameters separately (other dialects)
// const db = new Sequelize('link-shorter', 'postgres', 'sayem2017', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// Exports file database to app.js
module.exports = new Sequelize('linkShorter', 'postgres', 'sayem2017', {
    host: 'localhost',
    dialect: 'postgres'
});
