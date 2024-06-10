import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator.js';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb.js';
const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        FavoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };