
import { createContext, useState } from "react";

export const AuthContext= createContext(null);
const [loading,setLoading]=useState(true);
const [user,setUser]=useState(null);
const authInfo={
    user,
    loading
}

const AuthProvider = ({children}) => {
    return (
       <AuthContext.Provider value={authInfo}>
       {children}
       </AuthContext.Provider>>
    );
};

export default AuthProvider;