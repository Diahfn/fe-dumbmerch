import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const isLogin = true

    return isLogin ? <Outlet /> : <Navigate to='/auth' />
}

export default PrivateRoute
