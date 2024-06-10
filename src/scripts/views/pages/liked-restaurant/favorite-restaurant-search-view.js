import { createRestaurantItemTemplate } from '../../templates/template-creator.js';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <input id="query" type="text" placeholder="Search favorite restaurants">
        <div id="restaurant-list" class="restaurant-list"></div>
      </div>
    `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showFavoriteRestaurants(restaurants) {
        const restaurantContainer = document.querySelector('#restaurant-list');
        restaurantContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    }
}

export default FavoriteRestaurantSearchView;
