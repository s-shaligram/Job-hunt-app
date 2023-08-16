import React, {createContext, useEffect, useState, useContext} from "react";
import {auth} from "../Components/Database/dbConfig";

export const StateContext = createContext({})

export const StateProvider = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setAuthenticatedUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <StateContext.Provider value={{authenticatedUser, loading}}>
            {props.children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
