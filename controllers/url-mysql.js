// Imports
const database = require('../configs/mysqldb');
const number = require('../helpers/number');
const table = 'url';

// Routes
module.exports = {
    list: function (req, res) {
        const sqlQuery = `SELECT * FROM ${table} ORDER BY id DESC`;
        database.query(sqlQuery)
            .then(data => {
                res.status(200).json({
                    data: data
                });
            }, err => {
                res.status(500).json({
                    error: `Error during request ${err}`
                });
            });
    },
    find: function (req, res) {
        const unique = req.params.unique;
        if (unique == undefined) {
            return res.status(404).json({
                error: 'Url parameter not found'
            });
        }
        const sqlQuery = 'SELECT * FROM ' + table + ' WHERE `unique` = ?';
        database.query(sqlQuery, [unique])
            .then(data => {
                if (data.length == 1) {
                    res.redirect(data[0].redirectUrl);
                } else {
                    res.status(404).json({
                        error: `Link not found`
                    });
                }
            }, err => {
                res.status(500).json({
                    error: `Error during request ${err}`
                });
            });
    },
    add: async function (req, res) {
        const redirectUrl = req.body.redirectUrl;
        const ip = `${req.client._peername.address}`;
        if (redirectUrl == undefined || ip == undefined) {
            res.status(404).send({
                error: 'Incomplete parameters'
            });
        }
        try {
            // Insert data
            const sqlQuery1 = `INSERT INTO ${table} (ip, redirectUrl, createAt) VALUE (?, ?, NOW())`;
            let data1 = await database.query(sqlQuery1, [ip, redirectUrl])

            // Update data
            const unique = `${data1.insertId}_${number.genNumber(111, 999)}`;
            const sqlQuery2 = 'UPDATE ' + table + ' SET `unique` = ? WHERE `id` = ?';
            let data2 = await database.query(sqlQuery2, [unique, data1.insertId])
            return res.status(200).json({
                unique: unique
            });
        } catch (err) {
            return res.status(500).json({
                error: `Error during request ${err}`
            });
        }
    }
};