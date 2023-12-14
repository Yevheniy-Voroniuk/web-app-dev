<template>
  <div class="page-b-black">
    <div class="wrapper">
      <div id="table-div">
        <button class="fa-button" @click="toCreatePage()">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
        <table id="table">
          <tr>
            <td>Користувач</td>
            <td>Нерухомість</td>
            <td>Сервіс</td>
            <td>Ціна</td>
            <td>Дата</td>
            <td>Дії</td>
          </tr>
          <tr v-for="(item, index) in deals" :key="index" class="item">
            <td>{{ item.userName }} {{ item.userSurname }}</td>
            <td>
              <img v-if="item.realtyPhoto" :src="serverURL + /uploads/ + item.realtyPhoto" alt="photo" class="realtyPhoto">
            </td>
            <td>{{ item.serviceName }}</td>
            <td>${{ item.price }}</td>
            <td>{{ item.date }}</td>
            <td>
              <button class="fa-button" @click="toEditPage(item.id)">
                <font-awesome-icon :icon="['fas', 'pen']" /></button>
              <button class="fa-button" @click="deleteDeal(item.id)">
                <font-awesome-icon :icon="['fas', 'trash']" /></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api';
import {serverURL} from "@/api/axiosInstance";

export default {
  data() {
    return {
      deals: [],
      serverURL,
    }
  },

  methods: {
    async getDeals() {
      const response = await api.deals.getDeals();
      for (const index in response) {
        const userId = response[index].userId;
        const realtyId = response[index].realtyId;
        const serviceId = response[index].serviceId;
        const user = await api.users.getUserById(userId);
        response[index].userName = user.name;
        response[index].userSurname = user.surname;
        if (realtyId) {
          const realty = await api.realty.getRealtyById(realtyId);
          response[index].realtyPhoto = realty.photo;
        } else if (serviceId) {
          const service = await api.services.getServiceById(serviceId);
          response[index].serviceName = service.name;
        }
        this.deals.push(response[index]);
      }
    },
    async toCreatePage() {
      this.$router.push('/deals/new');
    },
    async toEditPage(id) {
      this.$router.push(`/deal/${id}`);
    },
    async deleteDeal(id) {
      await api.deals.deleteDeal(id);
      this.deals = [];
      await this.getDeals();
    },
  },
  async mounted() {
    await this.getDeals();
  },
}
</script>