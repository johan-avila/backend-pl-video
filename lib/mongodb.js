const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config/index");

// encodeURIComponent() /* Es metodo nativo de JavaScript */
const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const DB_NAME = config.db_name;
// console.log(config);

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.db_host}:${config.db_port}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLIb {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        this.dbname = DB_NAME;
    }
    connect() {
        if (!MongoLIb.connection) {
            MongoLIb.connection = new Promise((resolve, reject) => {
                this.client.connect((err) => {
                    if (err) {
                        reject(err);
                    }
                    // console.log("Connected is true");
                    resolve(this.client.db(this.dbname));
                });
            });
        }
        return MongoLIb.connection;
    }
    getAll(collection, query={} ) {
    return this.connect().then(db => {
    
            return db.collection(collection).find(query).toArray();
        });
    }
    getOne(collection, movieId) {
        return this.connect().then((db) => {
            return db
                .collection(collection)
                .findOne({ _id: ObjectId(movieId) });
        });
    }
    createOne(collection, data) {
     return   this.connect()
            .then(db => {
                return db.collection(collection).insertOne( data );
            })
            .then(result =>  result.insertedId);
    }
    updateOne(collection, movieId, data) {
        return this.connect()
            .then((db) => {
                //{upsert:true} Dice si actializa o inserta
                return db
                    .collection(collection)
                    .updateOne( 
                        { _id: ObjectId(movieId) },
                        { $set: data },
                        { upsert: true }
                    );
            })
            .then((result) => result.upsertedId || movieId);
    }
    deleteOne(collection, movieId) {
        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .deleteOne({ _id: ObjectId(movieId)});
            })
            .then(() => movieId);
    }
}

module.exports = MongoLIb;