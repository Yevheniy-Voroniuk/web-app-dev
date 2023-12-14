import $api from "@/api/apiInstance";

const realtyApi = {
    async getRealty() {
        try {
            return await $api.get('/realty');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive realty: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive realty: ${error.message || error}`);
            }
        }
    },

    async getRealtyById(realtyId) {
        try {
            return await $api.get(`/realty/${realtyId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive realty: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive realty: ${error.message || error}`);
            }
        }
    },

    async createRealty(body) {
        try {
            return await $api.post('/realty', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to create realty: ${error.response.data.message}`);
            } else {
                alert(`Failed to create realty: ${error.message || error}`);
            }
        }
    },

    async updateRealty(realtyId, body) {
        try {
            return await $api.patch(`/realty/${realtyId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to update realty: ${error.response.data.message}`);
            } else {
                alert(`Failed to update realty: ${error.message || error}`);
            }
        }
    },

    async deleteRealty(realtyId) {
        try {
            return await $api.delete(`/realty/${realtyId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to delete realty: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete realty: ${error.message || error}`);
            }
        }
    },

    async buyRealty(body) {
        try {
            return await $api.post('/realty/buy', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to buy realty: ${error.response.data.message}`);
            } else {
                alert(`Failed to buy realty: ${error.message || error}`);
            }
        }
    },
};

export default realtyApi;