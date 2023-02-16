import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }


    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User logged in")
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])


    const authInfo = {
        createUser,
        loginUser,
        logOut,
        user,
        updateUser,
        googleSignIn,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;