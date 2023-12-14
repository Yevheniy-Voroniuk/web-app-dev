<template>
  <div class="page-b-black">
    <div class="wrapper">
      <div id="table-div">
        <button class="fa-button" @click="toCreatePage()" v-if="isAdmin">
          <font-awesome-icon :icon="['fas', 'plus']"/>
        </button>
        <table id="table">
          <tr>
            <td>Назва</td>
            <td>Опис</td>
            <td>Ціна</td>
            <td v-if="isAuth">Дії</td>
          </tr>
          <tr v-for="(item, index) in services" :key="index" class="item">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>${{ item.price }}</td>
            <td v-if="isAuth && !isAdmin">
              <button class="fa-button" @click="buyService(item.id)">
                <font-awesome-icon :icon="['fas', 'shopping-cart']"/>
              </button>
            </td>
            <td v-if="isAuth && isAdmin">
              <button class="fa-button" @click="toEditPage(item.id)">
                <font-awesome-icon :icon="['fas', 'pen']"/>
              </button>
              <button class="fa-button" @click="deleteService(item.id)">
                <font-awesome-icon :icon="['fas', 'trash']"/>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api';

export default {
  data() {
    return {
      services: [],
      isAuth: localStorage.getItem('isAuth') || null,
      isAdmin: localStorage.getItem('isAdmin') || null,
    }
  },

  methods: {
    async getServices() {
      const response = await api.services.getServices();
      this.services = response;
    },
    async toCreatePage() {
      this.$router.push('/services/new');
    },
    async toEditPage(id) {
      this.$router.push(`/service/${id}`);
    },
    async deleteService(id) {
      await api.services.deleteService(id);
      await this.getServices();
    },
    async buyService(id) {
      const formBody = {serviceId: id}
      await api.services.buyService(formBody);
      await this.getServices();
    },
  },

  async mounted() {
    await this.getServices();
  },
}
</script>