import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.js';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter.js';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view.js';

describe('Showing all favorite restaurants', () => {
    let presenter;
    let view;

    const setRestaurantListContainer = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
        presenter = new FavoriteRestaurantShowPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb,
        });
    };

    beforeEach(() => {
        setRestaurantListContainer();
        constructPresenter();
    });

    it('should show the information that no restaurants have been liked', () => {
        presenter._displayRestaurants([]);

        expect(document.querySelectorAll('.restaurant-item__not__found').length)
            .toEqual(1);
    });

    it('should show the restaurants that have been liked', (done) => {
        document.body.innerHTML = '<div id="restaurant"></div>';

        FavoriteRestaurantIdb.putRestaurant({ id: 1, name: 'restaurant abc' });

        presenter._showAllFavoriteRestaurants().then(() => {
            expect(document.querySelectorAll('.restaurant-item').length)
                .toEqual(1);
            done();
        });
    });
});
