import TheRestaurantDbSource from '../../data/therestaurantdb-source.js';
import { createRestaurantListTemplate } from '../templates/template-creator.js';

const Home = {
    async render() {
        return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurants</h2>
        <div id="restaurant-list" class="restaurant-list"></div>
      </div>
    `;
    },

    async afterRender() {
        const listrestaurants = await TheRestaurantDbSource.getRestaurants();
        const restaurantContainer = document.getElementById('restaurant-list');
        listrestaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
        });
    },
};

export default Home;
