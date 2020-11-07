const MongoLib = require("../lib/mongodb");
const bcrypt = require("bcrypt");

class UserService {
    constructor() {
        this.collection = "users";
        this.mongoDB = new MongoLib();
    }

    async getUsers({ email }) {
        const [user] = this.mongoDB.getAll(this.collection, { email });
        return user
    }
    async createUser({user}) {
        const { name, email, password } = user
        //Convierte al password del usuarion en un hash porque es mas seguro
        //Esta funcion solo recibe el string para hacer hash y el numerom de iteraciones
        const hashedPassword = await bcrypt.hash(password, 10)

        const creteUserId = await this.mongoDB.createOne(this.collection, {
            name,
            email,
            password: hashedPassword
        }) 
        return creteUserId
    }
}


module.exports = UserService