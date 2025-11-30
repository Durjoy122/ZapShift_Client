import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading/Loading';
import useRole from '../hooks/useRole';


const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role , roleLoading } = useRole()
    if(loading || roleLoading) {
        return <Loading></Loading>
    }
    if (role !== 'admin') {
        return <h1> Access is Forbidden </h1>
    }
    return children;
};

export default AdminRoute;