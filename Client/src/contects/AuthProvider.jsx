import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginwithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            //console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        user,
        creatUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
