import CONFIG from '../../globals/config.js';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Menu</h4>
    <div class="restaurant__menu">
      <div>
        <h5>Foods</h5>
        <ul>
          ${restaurant.menus && restaurant.menus.foods ? restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('') : '<li>No foods available</li>'}
        </ul>
      </div>
      <div>
        <h5>Drinks</h5>
        <ul>
          ${restaurant.menus && restaurant.menus.drinks ? restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('') : '<li>No drinks available</li>'}
        </ul>
      </div>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews ? restaurant.customerReviews.map((review) => `
      <div class="review">
        <p class="review__name">${review.name}</p>
        <p class="review__date">${review.date}</p>
        <p class="review__review">${review.review}</p>
      </div>
    `).join('') : '<p>No reviews available</p>'}
    <form id="reviewForm" class="review-form">
      <h4>Leave a Review</h4>
      <input type="text" id="name" name="name" placeholder="Your name" required>
      <textarea id="review" name="review" placeholder="Your review" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="restaurant-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" loading="lazy">
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__title">${restaurant.name}</h3>
      <p class="restaurant-item__city">Kota: ${restaurant.city}</p>
      <p class="restaurant-item__rating">Rating: ${restaurant.rating}</p>
      <p class="restaurant-item__description">${restaurant.description}</p>
      <button class="restaurant-item__detail-button" onclick="location.href='#/detail/${restaurant.id}'" class="restaurant_detail">Lihat Detail</button>
    </div>
  </div>
`;

const createRestaurantListTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="restaurant-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" loading="lazy">
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__title">${restaurant.name}</h3>
      <p class="restaurant-item__city">Kota: ${restaurant.city}</p>
      <p class="restaurant-item__rating">Rating: ${restaurant.rating}</p>
      <p class="restaurant-item__description">${restaurant.description}</p>
      <button class="restaurant-item__detail-button" onclick="location.href='#/detail/${restaurant.id}'" class="restaurant_detail">Lihat Detail</button>
    </div>
  </div>
`;

const LikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const UnlikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="unlike">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createRestaurantListTemplate,
    LikeButtonTemplate,
    UnlikedButtonTemplate,
};
