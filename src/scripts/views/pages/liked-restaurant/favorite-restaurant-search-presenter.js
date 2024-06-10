class FavoriteRestaurantSearchPresenter {
    constructor({ view, favoriteRestaurants }) {
        this._view = view;
        this._favoriteRestaurants = favoriteRestaurants;

        this._listenToSearchRequestByUser();
    }

    _listenToSearchRequestByUser() {
        this._view.runWhenUserIsSearching((latestQuery) => {
            this._searchRestaurants(latestQuery);
        });
    }

    async _searchRestaurants(latestQuery) {
        const foundRestaurants = await this._favoriteRestaurants.searchRestaurants(latestQuery);
        this._showFoundRestaurants(foundRestaurants);
    }

    _showFoundRestaurants(restaurants) {
        this._view.showFavoriteRestaurants(restaurants);
    }
}

export default FavoriteRestaurantSearchPresenter;
