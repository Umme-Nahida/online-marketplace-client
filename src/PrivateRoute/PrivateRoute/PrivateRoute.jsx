import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)
    if (loading) {
        return <div className="text-center text-blue-600">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRout;