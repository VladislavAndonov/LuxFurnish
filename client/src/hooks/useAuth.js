import { login, register } from "../api/data";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const authData = await login(email, password);
        changeAuthState(authData);
        return authData;
    };

    return loginHandler
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const authData = await register(email, password);
        changeAuthState(authData);
        return authData;
    };

    return registerHandler;
};

export const useLogout = () => {
    const { logout } = useAuthContext();

    const logoutHandler = () => {
        logout();
    };

    return logoutHandler;
};