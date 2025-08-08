import React, {createContext, useState} from "react";
import user from "../data/profile.json";

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const [userCredit, setUserCredit] = useState(user.profile.credit);


    return <UserContext.Provider value={{userCredit, setUserCredit}}>
        {children}
    </UserContext.Provider>
};

export default UserProvider;