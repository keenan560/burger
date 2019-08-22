const orm = require('../config/orm');

const db = {
    displayAll: orm.selectAll(),
    addBurger: orm.insertOne("burger"),
    devourBurger: orm.updateOne("burger")
}



module.exports = db;

