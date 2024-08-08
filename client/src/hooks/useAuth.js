import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);
        changeAuthState(authData);
        return authData;
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);
        changeAuthState(authData);
        return authData;
    };

    return registerHandler;
};

export const useLogout = () => {
    const { logout: contextLogout } = useAuthContext();

    const logoutHandler = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Failed to log out:", error);
        }

        contextLogout();
    };

    return logoutHandler;
};
