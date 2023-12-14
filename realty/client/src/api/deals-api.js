import $api from "@/api/apiInstance";

const dealsApi = {
    async getDeals() {
        try {
            return await $api.get('/deals');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive deals: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive deals: ${error.message || error}`);
            }
        }
    },

    async getDealById(dealId) {
        try {
            return await $api.get(`/deal/${dealId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive deal: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive deal: ${error.message || error}`);
            }
        }
    },

    async createDeal(body) {
        try {
            return await $api.post('/deal', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to create deal: ${error.response.data.message}`);
            } else {
                alert(`Failed to create deal: ${error.message || error}`);
            }
        }
    },

    async updateDeal(dealId, body) {
        try {
            return await $api.patch(`/deal/${dealId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to update deal: ${error.response.data.message}`);
            } else {
                alert(`Failed to update deal: ${error.message || error}`);
            }
        }
    },

    async deleteDeal(dealId) {
        try {
            return await $api.delete(`/deal/${dealId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to delete deal: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete deal: ${error.message || error}`);
            }
        }
    }
}

export default dealsApi;