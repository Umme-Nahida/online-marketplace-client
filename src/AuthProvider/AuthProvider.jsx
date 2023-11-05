import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from "./_firbase.confic";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const provider = new GoogleAuthProvider()
    
//   create user 
  const creatUser = (email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
  }

//   sign in user 
const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
 const googleSignIn = ()=>{
     return signInWithPopup(auth,provider)
 }

// signOut user
 const logOut = ()=>{
    return signOut(auth)
 }

    const authInfo = {
     user,
     creatUser,
     signInUser,
     googleSignIn,
     logOut 
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,currentUser=>{
             console.log('ami tmk observe korci',currentUser)
             setUser(currentUser)
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