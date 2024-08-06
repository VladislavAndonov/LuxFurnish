import { createContext, useContext } from "react";
import usePersistentState from "../hooks/usePersistentState";

export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistentState('auth', {});

    const changeAuthState = (state) => {
        localStorage.setItem("accessToken", state.accessToken);
        setAuthState(state);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({});
    };

    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}
