<template>
  <div class="wrapper">
    <div class="page">
      <h1>Редагування сервісу</h1>
      <form @submit.prevent="submitForm">
        <div>
          <div>
            <label for="name">Назва:</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                v-model="formData.name"
            />
          </div>

          <div>
            <label for="description">Опис:</label>
            <textarea
                id="description"
                name="description"
                v-model="formData.description"
            />
          </div>

          <div>
            <label for="price">Ціна:</label>
            <input
                type="number"
                id="price"
                name="price"
                min="1"
                v-model="formData.price"
                required
            />
          </div>
        </div>
        <button type="submit">Зберегти</button>
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
      formData: {
        id: "",
        name: "",
        description: "",
        price: "",
      },
    }
  },
  methods: {
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = getFormBody(form);
      const response = await api.services.updateService(this.formData.id, formBody);
      if (response && response.status === 200) {
        this.$router.push("/services");
      }
    },
  },
  async mounted() {
    this.formData.id = this.$route.params.id;
    const service = await api.services.getServiceById(this.formData.id);
    this.formData.name = service.name;
    this.formData.description = service.description;
    this.formData.price = service.price;
  },
};
</script>