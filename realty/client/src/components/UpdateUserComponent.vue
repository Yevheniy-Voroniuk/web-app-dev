<template>
  <div class="wrapper">
    <div class="page">
      <h1>Редагування користувача</h1>
      <form @submit.prevent="submitForm">
        <div>
          <div>
            <label for="name">Ім’я:</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                v-model="formData.name"
                @input="validate($event.target.name)"
            />
            <div class="error" v-if="formErrors.name">
              {{ formErrors.name }}
            </div>
          </div>

          <div>
            <label for="surname">Прізвище:</label>
            <input
                type="text"
                id="surname"
                name="surname"
                required
                v-model="formData.surname"
                @input="validate($event.target.name)"
            />
            <div class="error" v-if="formErrors.surname">
              {{ formErrors.surname }}
            </div>
          </div>

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
            <label for="phone">Телефон:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                v-model.lazy="formData.phone"
                @input="validate($event.target.name)"
                @change="validate($event.target.name)"
                @click="initInputMask"
            />
            <div class="error" v-if="formErrors.phone">
              {{ formErrors.phone }}
            </div>
          </div>

          <div class="select-wrapper">
            <label for="role">Роль:</label>
            <select
                class="select-items"
                id="role"
                name="role"
                required
                v-model="formData.role">
              <option value="user">Користувач</option>
              <option value="admin">Адміністратор</option>
            </select>
          </div>
        </div>
        <button type="submit">Зберегти</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../api";
import inputMask from "../utils/InputMask";
import getFormBody from "../utils/getFormBody";
import {validateEmail, validateName, validatePhone, validateSurname} from "@/utils/validateFields";

export default {
  data() {
    return {
      formData: {
        id: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        role: "",
      },
      formErrors: {
        name: null,
        surname: null,
        email: null,
        password: null,
        phone: null,
        role: null,
      },
    };
  },
  methods: {
    initInputMask() {
      const element = document.getElementById("phone");
      inputMask(element);
    },
    validate(element) {
      switch (element) {
        case 'name':
          this.formErrors.name = validateName(this.formData.name);
          break;
        case 'surname':
          this.formErrors.surname = validateSurname(this.formData.surname);
          break;
        case 'email':
          this.formErrors.email = validateEmail(this.formData.email);
          break;
        case 'phone':
          this.formErrors.phone = validatePhone(this.formData.phone);
          break;
      }
    },
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = getFormBody(form);
      const response = await api.users.updateUser(this.formData.id, formBody);
      if (response && response.status === 200) {
        this.$router.push("/users");
      }
    },
  },
  async mounted() {
    this.formData.id = this.$route.params.id;
    const user = await api.users.getUserById(this.formData.id);
    this.formData.name = user.name;
    this.formData.surname = user.surname;
    this.formData.email = user.email;
    this.formData.phone = user.phone;
    this.formData.role = user.role;
  },
};
</script>