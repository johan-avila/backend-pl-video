const { MongoClient, /* ObjectId */ } = require("mongodb");
const { config } = require("../config/index");

// encodeURIComponent() /* Es metodo nativo de JavaScript */
const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const DB_NAME = config.db_name;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.db_host}:${config.db_port}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLIb {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbname = DB_NAME;
    }
    connect() {
        if (!MongoLIb.connection) {
            MongoLIb.connection = new Promise((resolve, reject) => {
                this.client.connect((err) => {
                    if (err) {
                        reject(err);
                    }
                    console.log("Connected is true");
                    resolve(this.client.db(this.dbname));
                });
            });
        }
        return MongoLIb.connection;
    }
}


module.exports = MongoLIb