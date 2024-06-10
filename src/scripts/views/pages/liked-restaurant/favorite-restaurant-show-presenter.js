class FavoriteRestaurantShowPresenter {
    constructor({ view, favoriteRestaurants }) {
        this._view = view;
        this._favoriteRestaurants = favoriteRestaurants;

        this._showAllFavoriteRestaurants();
    }

    async _showAllFavoriteRestaurants() {
        const restaurants = await this._favoriteRestaurants.getAllRestaurants();
        this._displayRestaurants(restaurants);
    }

    _displayRestaurants(restaurants) {
        this._view.showFavoriteRestaurants(restaurants);
    }
}

export default FavoriteRestaurantShowPresenter;
