<template>
  <div class="wrapper">
    <div class="page">
      <h1>Вхід</h1>
      <form @submit.prevent="submitForm">
        <div>
          <div>
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                v-model="formData.email"
                @input="validate($event.target.name)"
            />
            <div class="error" v-if="formErrors.email">
              {{ formErrors.email }}
            </div>
          </div>

          <div>
            <label for="password">Пароль:</label>
            <input
                id="password"
                type="password"
                name="password"
                required
                v-model="formData.password"
                @input="validate($event.target.name)"
            />
            <div class="error" v-if="formErrors.password">
              {{ formErrors.password }}
            </div>
          </div>
        </div>
        <button type="submit">Увійти</button>
      </form>
    </div>
  </div>

</template>

<script>
import api from "../api";
import getFormBody from "../utils/getFormBody";
import {validateEmail, validatePassword} from "@/utils/validateFields";
import {setInLocalStorage} from "@/utils/LocalStorage";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      formErrors: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    validate(element) {
      switch (element) {
        case 'email':
          this.formErrors.email = validateEmail(this.formData.email);
          break;
        case 'password':
          this.formErrors.password = validatePassword(this.formData.password);
          break;
      }
    },
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = getFormBody(form);
      const response = await api.auth.login(formBody);
      if (response && response.status === 200) {
        setInLocalStorage();
        this.$router.push('/');
      }
    },
  },
};
</script>