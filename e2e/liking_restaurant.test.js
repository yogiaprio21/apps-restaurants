const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
    
    I.amOnPage('/');
    I.saveScreenshot('detail_page_before_liking.png');
w
    I.seeElement(".restaurant_detail")
    const firstRestaurant = locate(".restaurant_detail").first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item .restaurant');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item .restaurant .restaurant_detail');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');
    I.seeElement('.restaurant_detail');

    const firstRestaurant = locate('.restaurant_detail').first();
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item .restaurant');

    I.click(".restaurant_detail")

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
