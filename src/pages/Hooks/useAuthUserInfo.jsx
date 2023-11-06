import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const useAuthUserInfo = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuthUserInfo;