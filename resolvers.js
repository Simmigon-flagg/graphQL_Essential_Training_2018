
class Friend {
    constructor(id, { firstName, lastName, gender, lang, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.lang = lang;
        this.email = email;

    }
}

const database = {};

// Resolvers
const resolvers = {
    getFriend: ( { id} ) => {
        return new Friend(id, database[id]);
    },
    createFriend :({input}) =>{
        let id = require('crypto').randomBytes(10).toString('hex');
        database[id] = input;
        return new Friend(id, input);
        
    }
}

export default resolvers
