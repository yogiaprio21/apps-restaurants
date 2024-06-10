import API_ENDPOINT from '../globals/endpoint-api.js';

class TheRestaurantDbSource {
    static async getRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestauran(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async postReview(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
        return response.json();
    }
}

export default TheRestaurantDbSource;
