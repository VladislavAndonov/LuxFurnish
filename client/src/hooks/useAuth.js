import { useEffect } from "react";
import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    return async (email, password) => {
        const authData = await login(email, password);
        changeAuthState(authData);
        return authData;
    };
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    return async (email, password) => {
        const authData = await register(email, password);
        changeAuthState(authData);
        return authData;
    };
};

export const useLogout = () => {
    const { logout } = useAuthContext();

    useEffect(() => {
        logout();
    }, []);
};