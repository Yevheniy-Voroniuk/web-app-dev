<template>
  <div class="wrapper">
    <div class="page">
      <h1>Створення сервісу</h1>
      <form @submit.prevent="submitForm">
        <div>
          <div>
            <label for="name">Назва:</label>
            <input
                type="text"
                id="name"
                name="name"
                required
            />
          </div>

          <div>
            <label for="description">Опис:</label>
            <textarea
                id="description"
                name="description"
            />
          </div>

          <div>
            <label for="price">Ціна:</label>
            <input
                type="number"
                id="price"
                name="price"
                min="1"
                required
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
  methods: {
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = getFormBody(form);
      const response = await api.services.createService(formBody);
      if (response && response.status === 200) {
        this.$router.push("/services");
      }
    },
  },
};
</script>