<template>
  <div class="wrapper">
    <div class="page">
      <h1>Редагування угоди</h1>
      <form @submit.prevent="submitForm">
        <div>
          <div>
            <label for="user">Користувач:</label>
            <select
                class="select-items"
                id="user"
                name="userId"
                required
                v-model="formData.userId"
            >
              <option value=""></option>
              <option v-for="(item, index) in users" :key="index" :value="item.id">
                {{ item.name }} {{ item.surname }}
              </option>
            </select>
          </div>

          <div>
            <label for="realty">Нерухомість:</label>
            <select
                class="select-items"
                id="realty"
                name="realtyId"
                v-model="formData.realtyId"
            >
              <option value=""></option>
              <option v-for="(item, index) in realty" :key="index" :value="item.id">
                {{ item.city }} {{item.area}}м² ${{ item.price }} {{ item.type }}
              </option>
            </select>
          </div>

          <div>
            <label for="service">Сервіс:</label>
            <select
                class="select-items"
                id="service"
                name="serviceId"
                v-model="formData.serviceId"
            >
              <option value=""></option>
              <option v-for="(item, index) in services" :key="index" :value="item.id">
                {{ item.name }} ${{ item.price }}
              </option>
            </select>
          </div>

          <div>
            <label for="price">Ціна:</label>
            <input
                type="number"
                id="price"
                name="price"
                min="1"
                v-model="formData.price"
            />
          </div>

        </div>
        <button type="submit">Створити</button>
      </form>
    </div>
  </div>

</template>

<script>
import api from "../api";
import getFormBody from "../utils/getFormBody";

export default {
  data() {
    return {
      users: [],
      realty: [],
      services: [],
      formData: {
        id: "",
        userId: "",
        realtyId: "",
        serviceId: "",
        price: "",
      },
    }
  },
  methods: {
    async getUsers() {
      this.users = await api.users.getUsers();
    },
    async getRealty() {
      this.realty = await api.realty.getRealty();
    },
    async getServices() {
      this.services = await api.services.getServices();
    },
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = getFormBody(form);
      const response = await api.deals.updateDeal(this.formData.id, formBody);
      if (response && response.status === 200) {
        this.$router.push("/deals");
      }
    },
  },
  async mounted() {
    this.formData.id = this.$route.params.id;
    const deal = await api.deals.getDealById(this.formData.id);
    this.formData.userId = deal.userId;
    this.formData.realtyId = deal.realtyId;
    this.formData.serviceId = deal.serviceId;
    this.formData.price = deal.price;
    await this.getUsers();
    await this.getRealty();
    await this.getServices();
  },
};
</script>