
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleProvider=new GoogleAuthProvider();

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;













// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { app } from "../../firebase/firebase.config";


// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({children}) => {
//     const [user,setUser]=useState(null);
//     const [loading,setLoading]=useState(true);
//     useEffect(()=>{
//      const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
//             setUser(currentUser);
//             console.log('current user',currentUser);
//             setLoading(false);
//         });
//         return ()=>{
//             return unsubscribe();
//         }
//     },[])

// const authInfo={
//     user,
//     setUser,
//     loading,
//     setLoading,
//     createUser,
//     signIn,
//     signInWithGoogle,
//     logOut,
//     updateUserProfile,
// }
// return (
//     <AuthContext.Provider value={authInfo}>
//         {children}
//     </AuthContext.Provider>
// );
// };

// export default AuthProvider;