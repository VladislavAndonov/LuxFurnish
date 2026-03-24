import { Navigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useAuth';

export default function Logout() {
    useLogout();

    return <Navigate to="/" replace />;
}
