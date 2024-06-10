import Home from '../views/pages/home.js';
import Detail from '../views/pages/detail.js';
import Favorite from '../views/pages/favorite.js';

const routes = {
    '/': Home,
    '/home': Home,
    '/detail/:id': Detail,
    '/favorite': Favorite,
};

export default routes;
