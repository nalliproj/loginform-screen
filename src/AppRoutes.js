import {Routes,Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<LoginForm></LoginForm>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
    )
}

export default AppRoutes;