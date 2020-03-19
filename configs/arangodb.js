const file = require('../helpers/file')
Database = require('arangojs').Database;

module.exports = class database{

    constructor(){
        this._db = undefined;
        this._collectionName = undefined;
        this._collection = undefined;
        this._database = undefined;
    }

    static async connection(dbAccess = undefined){
        if(dbAccess === undefined){
            try{
                this._database = JSON.parse(await file.rFSync('./.env','utf8'));
                data = data['database']['arangodb'];
            }catch (err){
                console.error(err);
                throw new Error();
            }
        }
        this._db = new Database(`http://${this._database['host']}:${this._database['port']}/`);
        this._db.useBasicAuth(this._database['user'], this._database['password']);
        this._db.createDatabase(this._database['database']).then(
            () => {
                console.log('Database created');
                // this._db.useDatabase('mydb');
                this._db.useDatabase(this._database['database']);
                console.log('Database connected \n');
            },
            err =>{
                if(err.code == 401){
                    console.error('Failed to create database: user has not privileges ', err.code);
                    throw new Error();
                }else if(err.code == 409){
                    this._db.useDatabase(this._database['database']['db']);
                    console.log('Database connected \n');
                }else{
                    console.error('Failed to create database: code', err.code);
                    throw new Error();
                }
            }
        );   
        this._collectionName = this._database['database']['default_collection'];
        this._collection = this._db.collection(this._collectionName);
        this._collection.create().then(
        () => console.log('Collection created'),
        err => {
            console.error('Failed to create collection:', err);
            throw new Error();
        });
    }

    static getCollection(){
        return this._collectionName;
    }

    static setCollection(collection){
        this._collectionName = collection;
        this._collection = this._db.collection(this._collectionName);
        this._collection.create().then(
        () => console.log('Collection created'),
        err => {
            console.error('Failed to create collection:', err);
            throw new Error();
        });
    }

    static getDatabase(){
        return this._database;
    }

    static setCollection(dbAccess){
        this._database = dbAccess;
        this.connection(this._database);
    }

    static save(data){
        return new Promise((success,reject)=>{
            this._collection.save(data).then(
                meta => success(meta),
                err => reject(err)
            );
        });
    }

    static update(key, data){
        return new Promise((success,reject)=>{
            this._collection.update(key, data).then(
                meta => success(meta),
                err => reject(err)
            );
        });
    }

    static find(key){
        return new Promise((success,reject)=>{
            this._collection.document(key).then(
                meta => success(JSON.parse(JSON.stringify(meta, null, 2))),
                err => reject(err)
            );
        });
    }

    static findAll(){
        return new Promise((success,reject)=>{
            this._db.query(`FOR d IN ${this._collectionName} SORT d.value ASC RETURN d`)
            .then(cursor => cursor.all())
            .then(
                meta => success(meta),
                err => reject(err)
            );
        });
    }

    static remove(key){
        return new Promise((success,reject)=>{
            this._collection.remove(key).then(
                meta => success(meta),
                err => reject(err)
            );
        });
    }

    static import(data){
        return new Promise((success,reject)=>{
            this._collection.import(data).then(
                meta => success(meta),
                err => reject(err)
            );
        });
    }

    static query(query){
        return new Promise((success,reject)=>{
            this._db.query(query)
            .then(cursor => cursor.all())
            .then(
                meta => success(meta),
                err => reject(err)
            );
        });
    }

};