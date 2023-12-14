import $api from "@/api/apiInstance";

const usersApi = {
    async getUsers() {
        try {
            return await $api.get('/users');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async getUserById(userId) {
        try {
            return await $api.get(`/user/${userId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive user: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive user: ${error.message || error}`);
            }
        }
    },

    async createUser(body) {
        try {
            return await $api.post('/user', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to create user: ${error.response.data.message}`);
            } else {
                alert(`Failed to create user: ${error.message || error}`);
            }
        }
    },

    async updateUser(userId, body) {
        try {
            return await $api.patch(`/user/${userId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to update user: ${error.response.data.message}`);
            } else {
                alert(`Failed to update user: ${error.message || error}`);
            }
        }
    },

    async deleteUser(userId) {
        try {
            return await $api.delete(`/user/${userId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to delete user: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete user: ${error.message || error}`);
            }
        }
    },

    async getWishList() {
        try {
            return await $api.get('/user/wish-list');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive wishlist: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive wishlist: ${error.message || error}`);
            }
        }
    },

    async addToWishList(body) {
        try {
            return await $api.post('/user/add-to-wish-list', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to add to wishlist: ${error.response.data.message}`);
            } else {
                alert(`Failed to add to wishlist: ${error.message || error}`);
            }
        }
    },

    async deleteFromWishList(body) {
        try {
            return await $api.post('/user/delete-from-wish-list', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to delete from wishlist: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete from wishlist: ${error.message || error}`);
            }
        }
    },
};

export default usersApi;