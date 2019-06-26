const db = require('../db');

module.exports = db.defineModel('pets', {
    name: db.STRING(100),
    gender: db.STRING(100),
    birth: db.STRING(100)
});