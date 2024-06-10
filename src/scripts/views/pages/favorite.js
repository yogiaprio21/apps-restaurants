import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter.js';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view.js';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter.js';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        new FavoriteRestaurantShowPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb,
        });

        new FavoriteRestaurantSearchPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb,
        });
    },
};

export default Favorite;
