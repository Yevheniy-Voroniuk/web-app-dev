import $api from "@/api/apiInstance";

const reviewsApi = {
    async getReviews() {
        try {
            return await $api.get('/reviews');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive reviews: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive reviews: ${error.message || error}`);
            }
        }
    },

    async getReviewById(reviewId) {
        try {
            return await $api.get(`/review/${reviewId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive review: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive review: ${error.message || error}`);
            }
        }
    },

    async createReview(body) {
        try {
            return await $api.post('/review', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to create review: ${error.response.data.message}`);
            } else {
                alert(`Failed to create review: ${error.message || error}`);
            }
        }
    },

    async updateReview(reviewId, body) {
        try {
            return await $api.patch(`/review/${reviewId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to update review: ${error.response.data.message}`);
            } else {
                alert(`Failed to update review: ${error.message || error}`);
            }
        }
    },

    async deleteReview(reviewId) {
        try {
            return await $api.delete(`/review/${reviewId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to delete review: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete review: ${error.message || error}`);
            }
        }
    },
};

export default reviewsApi;