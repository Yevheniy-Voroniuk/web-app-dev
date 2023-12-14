<template>
  <div class="wrapper">
    <div class="page">
      <h1>Відгуки</h1>
      <form @submit.prevent='submitForm' v-if="isAuth">
        <div>
          <div>
            <label for="message">Ваш відгук про нас:</label>
            <textarea
                id="message"
                name="message"
                v-model="formData.message"
            />
          </div>
          <button type="submit">Написати</button>
        </div>
      </form>
    </div>

    <div v-for="(item, index) in reviews" :key="index" class="reviews">
      <div class="review-item">
        <p>{{ item.message }}</p>
        <br>
        <p>{{ item.userName }} {{ item.userSurname }}</p>
        <p>{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../api";
import getFormBody from "../utils/getFormBody";

export default {
  data() {
    return {
      reviews: [],
      formData: {
        message: '',
      },
      isAuth: localStorage.getItem('isAuth') || null,
    };
  },
  methods: {
    async getReviews() {
      const response = await api.reviews.getReviews();
      for (const index in response) {
        const review = response[index];
        const user = await api.users.getUserById(review.userId);
        review.userName = user.name;
        review.userSurname = user.surname;
        this.reviews.push(review);
      }
    },
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = getFormBody(form);
      await api.reviews.createReview(formBody);
      this.formData.message = '';
      this.reviews = [];
      await this.getReviews();
    },

  },
  async mounted() {
    await this.getReviews();
  },
};
</script>