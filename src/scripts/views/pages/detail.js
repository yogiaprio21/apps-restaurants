import TheRestaurantDbSource from '../../data/therestaurantdb-source.js';
import UrlParser from '../../routes/url-parser.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';
import PostReview from '../../utils/post-review.js';

const Detail = {
    async render() {
        return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await TheRestaurantDbSource.detailRestauran(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant,
        });

        PostReview.init({
            form: document.querySelector('#reviewForm'),
            id: restaurant.id,
        });
    },
};

export default Detail;
