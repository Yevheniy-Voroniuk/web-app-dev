import $api from "@/api/apiInstance";

const servicesApi = {
    async getServices() {
        try {
            return await $api.get('/services');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive services: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive services: ${error.message || error}`);
            }
        }
    },

    async getServiceById(serviceId) {
        try {
            return await $api.get(`/service/${serviceId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive service: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive service: ${error.message || error}`);
            }
        }
    },

    async createService(body) {
        try {
            return await $api.post('/service', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to create service: ${error.response.data.message}`);
            } else {
                alert(`Failed to create service: ${error.message || error}`);
            }
        }
    },

    async updateService(serviceId, body) {
        try {
            return await $api.patch(`/service/${serviceId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to update service: ${error.response.data.message}`);
            } else {
                alert(`Failed to update service: ${error.message || error}`);
            }
        }
    },

    async deleteService(serviceId) {
        try {
            return await $api.delete(`/service/${serviceId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to delete service: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete service: ${error.message || error}`);
            }
        }
    },

    async buyService(body) {
        try {
            return await $api.post('/service/buy', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to buy service: ${error.response.data.message}`);
            } else {
                alert(`Failed to buy service: ${error.message || error}`);
            }
        }
    }
}

export default servicesApi;