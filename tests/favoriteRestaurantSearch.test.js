import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter.js';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.js';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view.js';

describe('Searching restaurants', () => {
    let presenter;
    let favoriteRestaurants;
    let view;

    const searchRestaurants = (query) => {
        const event = new Event('change');
        document.getElementById('query').value = query;
        document.getElementById('query').dispatchEvent(event);
    };

    const setRestaurantSearchContainer = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
        favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        presenter = new FavoriteRestaurantSearchPresenter({
            view,
            favoriteRestaurants,
        });
    };

    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
    });

    it('should be able to capture the query typed by the user', () => {
        searchRestaurants('restaurant a');

        expect(presenter._latestQuery)
            .toEqual('restaurant a');
    });

    it('should ask the model to search for restaurants', () => {
        searchRestaurants('restaurant a');

        expect(favoriteRestaurants.searchRestaurants)
            .toHaveBeenCalledWith('restaurant a');
    });

    it('should show the found restaurants', () => {
        presenter._showFoundRestaurants([{ id: 1 }]);
        expect(document.querySelectorAll('.restaurant-item').length)
            .toEqual(1);

        presenter._showFoundRestaurants([{ id: 1, name: 'restaurant a' }]);
        expect(document.querySelectorAll('.restaurant-item').length)
            .toEqual(1);
    });

    it('should show the name of the found restaurant', () => {
        presenter._showFoundRestaurants([{ id: 1, name: 'restaurant abc' }]);
        expect(document.querySelectorAll('.restaurant-item__title').item(0).textContent)
            .toEqual('restaurant abc');
    });

    it('should show - when the restaurant returned does not contain a name', () => {
        presenter._showFoundRestaurants([{ id: 1 }]);
        expect(document.querySelectorAll('.restaurant-item__title').item(0).textContent)
            .toEqual('-');
    });

    it('should show the rating of the found restaurant', () => {
        presenter._showFoundRestaurants([{ id: 1, rating: 3.5 }]);
        expect(document.querySelectorAll('.restaurant-item__rating').item(0).textContent)
            .toEqual('Rating: 3.5');
    });

    it('should show the city of the found restaurant', () => {
        presenter._showFoundRestaurants([{ id: 1, city: 'city abc' }]);
        expect(document.querySelectorAll('.restaurant-item__city').item(0).textContent)
            .toEqual('Kota: city abc');
    });
});
