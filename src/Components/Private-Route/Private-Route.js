import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const isAuth = true

    return isAuth === true ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute
