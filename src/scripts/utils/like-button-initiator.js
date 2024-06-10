import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js';
import { LikeButtonTemplate, UnlikedButtonTemplate } from '../views/templates/template-creator.js';

const LikeButtonInitiator = {
    async init({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist() {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(this._restaurant.id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = LikeButtonTemplate();

        const likeButton = this._likeButtonContainer.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
            await this._renderButton(); // Render button again after action
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = UnlikedButtonTemplate();

        const likeButton = this._likeButtonContainer.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            await this._renderButton(); // Render button again after action
        });
    },
};

export default LikeButtonInitiator;
