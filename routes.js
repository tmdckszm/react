import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';

export default [
    {
        path: '/',
        componet: Home 
    },
    {
        path: '/movies',
        componet: Movies 
    },
    {
        path: '/users',
        componet: Users
    },
];