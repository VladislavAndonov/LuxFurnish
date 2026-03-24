import { createContext, useContext } from "react";
import usePersistentState from "../hooks/usePersistentState";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
    const [authState, setAuthState] = usePersistentState({
        userId: null,
        email: null,
        accessToken: null,
    });

    function changeAuthState(data) {
        setAuthState({
            userId: data.userId,
            email: data.email,
            accessToken: data.accessToken,
        });
    }

    function logout() {
        setAuthState({
            userId: null,
            email: null,
            accessToken: null,
        });
    }

    const contextData = {
        userId: authState.userId,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.accessToken,
        changeAuthState,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}