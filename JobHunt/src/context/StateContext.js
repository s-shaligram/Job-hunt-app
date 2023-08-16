import React, {createContext, useEffect, useState, useContext} from "react";
import {auth, db} from "../Components/Database/dbConfig";
import {getDocs, query, where, collection} from "firebase/firestore";

export const StateContext = createContext({})

export const StateProvider = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            await getDoc(currentUser.email)
                .then((userData) => {
                    if (userData) {
                        setAuthenticatedUser({...userData,
                            displayName: currentUser.displayName,
                            photoURL: currentUser.photoURL,
                            phoneNumber: currentUser.phoneNumber,
                            isAnonymous: currentUser.isAnonymous,
                            emailVerified: currentUser.emailVerified,
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setAuthenticatedUser(null);
                });
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const getDoc = async (email) => {
        const usersCollection = collection(db, 'users');
        const q = query(usersCollection, where('email', '==', email));

        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0]; // Get the first document
                const userData = userDoc.data(); // Extract the data from the document
                return userData;
            } else {
                console.log('No user found with the given email.');
                return null;
            }
        } catch (error) {
            console.error('Error getting user by email:', error);
            return null;
        }
    }

    return (
        <StateContext.Provider value={{authenticatedUser, loading}}>
            {props.children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
