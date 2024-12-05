import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const emailPasswordSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfileData = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(() => {
                setUser((previous) => ({ ...previous, displayName: name, photoURL: photo }))
            })

    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)

                console.log("ON_AUTH_STATE:", currentUser)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        googleSignIn,
        emailPasswordSignUp,
        emailPasswordSignIn,
        logOut,
        updateProfileData
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;