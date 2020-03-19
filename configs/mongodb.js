const MongoClient = require('mongodb').MongoClient;
const file = require('../helpers/file');

module.exports = class database_ {
    constructor() {
        this.url = undefined;
    }
    static async connection() {
        let data;
        try {
            data = JSON.parse(await file.rFSync('./.env', 'utf8'));
            data = data['database']['mongodb'];
        } catch (err) {
            console.error(err);
            throw new Error();
        }
        this.url = `mongodb://${data['host']}:${data['port']}/${data['database']}`;
        MongoClient.connect(this.url, function (err, db) {
            if (err) throw err;
            console.log("Database created!");
            db.createCollection(data['collection'], function (err, res) {
                if (err && err.message != 'topology was destroyed') {
                    throw err;
                }
                console.log("Collection is created!");
                db.close();
            });
            db.close();
        });
    }

    static async listDatabases() {
        const databasesList = await this._connection.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };

    static select(collection) {
        return new Promise((success, reject) => {
            MongoClient.connect(this.url, function (err, db) {
                if (err) reject(err);
                db.collection(collection).find({}).toArray(function (err, result) {
                    if (err) reject(err);
                    db.close();
                    success(result);
                });
            });
        });
    }

    static selectOne(collection, email) {
        return new Promise((success, reject) => {
            MongoClient.connect(this.url, function (err, db) {
                if (err) reject(err);
                db.collection(collection).findOne({
                    email: email
                }, function (err, result) {
                    if (err) reject(err);
                    db.close();
                    success(result);
                });
            });
        });
    }

    static connect(collection, email, password) {
        return new Promise((success, reject) => {
            MongoClient.connect(this.url, function (err, db) {
                if (err) reject(err);
                db.collection(collection).findOne({
                    email: email,
                    password: password
                }, function (err, result) {
                    if (err) reject(err);
                    db.close();
                    success(result);
                });
            });
        });
    }

    static createOne(collection, item) {
        return new Promise((success, reject) => {
            MongoClient.connect(this.url, function (err, db) {
                if (err) reject(err);
                db.collection(collection).insertOne(item, function (err, result) {
                    if (err) reject(err);
                    db.close();
                    success(result);
                });
            });
        });
    }

    static update(collection, lastItem, newItem) {
        return new Promise((success, reject) => {
            MongoClient.connect(this.url, function (err, db) {
                if (err) reject(err);
                db.collection(collection).updateOne(lastItem, newItem, function (err, result) {
                    if (err) reject(err);
                    db.close();
                    success(result);
                });
            });
        });
    }

    static delete(collection, item) {
        return new Promise((success, reject) => {
            MongoClient.connect(this.url, function (err, db) {
                if (err) reject(err);
                db.collection(collection).remove(item, function (err, result) {
                    if (err) reject(err);
                    db.close();
                    success(result);
                });
            });
        });
    }
};