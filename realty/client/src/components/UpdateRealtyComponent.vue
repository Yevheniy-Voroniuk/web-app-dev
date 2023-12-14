<template>
  <div class="wrapper">
    <div class="page">
      <h1>Редагування нерухомості</h1>
      <form @submit.prevent="submitForm" enctype="multipart/form-data">
        <div>
          <div>
            <div class="current-photo" v-if="!formData.newPhoto">
              <label for="currentPhoto">Поточне фото:</label>
              <img v-if="formData.photo" :src="serverURL + /uploads/ + formData.photo"
                   alt="Current Photo"
                   class="realtyPhoto"
                   id="currentPhoto"
              >
            </div>

            <div class="file-input-wrapper">
              <label>Нове фото:</label>
              <label v-if="!formData.newPhoto" class="file-input-label" for="newPhoto">
                Натисніть, щоб обрати фото
              </label>
              <label v-else class="file-input-label" for="newPhoto">
                Фото обрано
              </label>
              <input
                  class="file-input"
                  type="file"
                  id="newPhoto"
                  name="photo"
                  accept="image/*"
                  v-on:change="fileAdded()"
              />
            </div>

          </div>

          <div class="select-wrapper">
            <label for="type">Тип:</label>
            <select
                class="select-items"
                id="type"
                name="type"
                required
                v-model="formData.type"
            >
              <option v-for="(type, index) in tests" :key="index" :value="type">{{ type }}</option>
              <option value="Квартира">Квартира</option>
              <option value="Апартаменти">Апартаменти</option>
              <option value="Приватний будинок">Приватний будинок</option>
              <option value="Комерційна нерухомість">Комерційна нерухомість</option>
            </select>
          </div>

          <div class="select-wrapper">
            <label for="city">Місто:</label>
            <select
                class="select-items"
                id="city"
                name="city"
                required
                v-model="formData.city"
            >
              <option v-for="(city, index) in cities" :key="index" :value="city">{{ city }}</option>
            </select>
          </div>

          <div>
            <label for="area">Площа, м²:</label>
            <input
                type="number"
                id="area"
                name="area"
                step="0.1"
                min="1"
                required
                v-model="formData.area"
            />
          </div>

          <div>
            <label for="rooms">Кімнати:</label>
            <input
                type="number"
                id="rooms"
                name="rooms"
                min="1"
                required
                v-model="formData.rooms"
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
                v-model="formData.price"
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
import {serverURL} from "@/api/axiosInstance";

export default {
  data() {
    return {
      serverURL,
      cities: "",
      tests: ['Квартира', 'Апартаменти', 'Приватний будинок', 'Комерційна нерухомість'],
      formData: {
        id: null,
        photo: null,
        newPhoto: null,
        type: null,
        city: null,
        area: null,
        rooms: null,
        price: null,
      },
    }
  },
  methods: {
    fileAdded() {
      this.formData.newPhoto = true;
    },
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = new FormData(form);
      if (this.formData.newPhoto) {
        formBody.photo = this.formData.newPhoto;
      }
      const response = await api.realty.updateRealty(this.formData.id, formBody);
      if (response && response.status === 200) {
        this.$router.push("/realty");
      }
    },
    async getCities() {
      const cities = await fetch('/UA.txt');
      const citiesInText = await cities.text();
      const citiesInSplit = citiesInText.split('\n').map(city => city.trim());
      this.cities = citiesInSplit;
    },
  },
  async mounted() {
    this.formData.id = this.$route.params.id;
    const realty = await api.realty.getRealtyById(this.formData.id);
    this.formData.photo = realty.photo;
    this.formData.type = realty.type;
    this.formData.city = realty.city;
    this.formData.area = realty.area;
    this.formData.rooms = realty.rooms;
    this.formData.price = realty.price;
    await this.getCities();
  },
};
</script>