import { createContext } from "react";

const userContext= createContext({
    user:{
        name:'Taylor Swift',
        email:'tay@gmail.com'
    }
})

export default userContext