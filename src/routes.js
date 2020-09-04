import Home from './client/Home';
import Counter from './client/Counter';
import Profile from './client/Profile';

export default [
    {
        path: '/',
        key:'/',
        component: Home,
        fetchData: Home.fetchData,
    },
    {
        path: '/counter',
        key:'counter',
        component: Counter,
    },
    {
        path: '/profile',
        key:'profile',
        component: Profile,
    },
]
