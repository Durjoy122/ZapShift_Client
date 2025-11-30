import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router';
import Loading from '../components/Loading/Loading';

const RiderRoute = ({children}) => {
    const { loading, user } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || !user || roleLoading) {
        return <Loading></Loading>
    }
    if (role !== 'rider') {
       return <h1> Access is Forbidden </h1>
    }
    return children;
};

export default RiderRoute;