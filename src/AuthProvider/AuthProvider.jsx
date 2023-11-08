import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from "./_firbase.confic";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const provider = new GoogleAuthProvider()
    
//   create user 
  const creatUser = (email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
  }

//   sign in user 
const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
 const googleSignIn = ()=>{
    setLoading(true)
     return signInWithPopup(auth,provider)
 }

// signOut user
 const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
 }

    const authInfo = {
     user,
     creatUser,
     signInUser,
     googleSignIn,
     logOut,
     loading 
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,currentUser=>{
             console.log('ami tmk observe korci',currentUser)
             setUser(currentUser)
             setLoading(false)
         })
     
         return ()=>{
             return subscribe()
         }
     },[])

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;