import { buildSchema } from 'graphql';

const schema = buildSchema(`

    type Friend {
        id: ID
        firstName: String  
        lastName: String  
        gender: String  
        lang: String  
        email: String

    }

    type Email {
      email: String
    }
   
    type Query {
      getfriend(id : ID): Friend 
    }

    input FriendInput{
        id: ID
        firstName: String  
        lastName: String  
        gender: String  
        lang: String  
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default schema;