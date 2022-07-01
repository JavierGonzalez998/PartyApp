import React, {
    useState
} from "react";

export const defaultState = {};
export const dataContext = React.createContext(defaultState);

export const Context = ({children}) => {
    const [userData, setUserData] = useState(defaultState);
    const [login, setLogin] = useState(false);
    return(
        <dataContext.Provider value={{
        userData,
        setUserData,
        login,
        setLogin
        }}>
        {children}
        </dataContext.Provider>
    );
};

export default Context;