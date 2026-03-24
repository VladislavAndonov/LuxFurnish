import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PublicGuard() {
    const { isAuthenticated } = useAuthContext();

    return (!isAuthenticated)
    ? <Outlet />
    : <Navigate to="/" />
}