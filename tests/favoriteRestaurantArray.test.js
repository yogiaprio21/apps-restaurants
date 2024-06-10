import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract.js';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
    getRestaurant(id) {
        if (!id) {
            return;
        }

        return favoriteRestaurants.find((restaurant) => restaurant.id === id);
    },

    getAllRestaurants() {
        return favoriteRestaurants;
    },

    putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        const existingRestaurantIndex = favoriteRestaurants.findIndex((r) => r.id === restaurant.id);
        if (existingRestaurantIndex === -1) {
            favoriteRestaurants.push(restaurant);
        } else {
            favoriteRestaurants[existingRestaurantIndex] = restaurant;
        }
    },

    deleteRestaurant(id) {
        favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
    },

    searchRestaurants(query) {
        return this.getAllRestaurants()
            .filter((restaurant) => {
                const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
                const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');

                const loweredCaseQuery = query.toLowerCase();
                const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

                return jammedRestaurantName.indexOf(jammedQuery) !== -1;
            });
    },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
    afterEach(() => favoriteRestaurants = []);

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
