import TheRestaurantDbSource from '../data/therestaurantdb-source.js';
import UrlParser from '../routes/url-parser.js';

const PostReview = {
    init({ form, id }) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = event.target.querySelector('#name').value;
            const review = event.target.querySelector('#review').value;

            const reviewData = {
                id,
                name,
                review,
            };

            try {
                const response = await TheRestaurantDbSource.postReview(reviewData);
                if (response.error) {
                    this._showMessage('Failed to submit review', true);
                } else {
                    this._showMessage('Review submitted successfully', false);
                    this._updateReviews(response.customerReviews);
                }
            } catch (error) {
                this._showMessage('An error occurred. Please try again later.', true);
            }
        });
    },

    _updateReviews(reviews) {
        const reviewsContainer = document.querySelector('.restaurant__reviews');
        reviewsContainer.innerHTML = `
      <h3>Customer Reviews</h3>
      ${reviews.map((review) => `
        <div class="review">
          <p class="review__name">${review.name}</p>
          <p class="review__date">${review.date}</p>
          <p class="review__review">${review.review}</p>
        </div>
      `).join('')}
    `;

        this._attachReviewForm();
    },

    _attachReviewForm() {
        const reviewsContainer = document.querySelector('.restaurant__reviews');
        const formHTML = `
      <form id="reviewForm" class="review-form">
        <h4>Leave a Review</h4>
        <input type="text" id="name" name="name" placeholder="Your name" required>
        <textarea id="review" name="review" placeholder="Your review" required></textarea>
        <button type="submit">Submit</button>
      </form>
    `;
        reviewsContainer.insertAdjacentHTML('beforeend', formHTML);

        const form = document.querySelector('#reviewForm');
        const { id } = UrlParser.parseActiveUrlWithoutCombiner();
        this.init({ form, id });
    },

    _showMessage(message, isError) {
        const messageContainer = document.createElement('div');
        messageContainer.className = `alert ${isError ? 'alert-danger' : 'alert-success'}`;
        messageContainer.innerText = message;
        document.body.appendChild(messageContainer);
        setTimeout(() => {
            messageContainer.remove();
        }, 3000);
    },
};

export default PostReview;
