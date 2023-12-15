<template>
  <div class="page-b-black">
    <div class="wrapper">
      <div id="table-div">
        <button class="fa-button" @click="toCreatePage" v-if="isAdmin">
          <font-awesome-icon :icon="['fas', 'plus']"/>
        </button>
        <table id="table">
          <tr>
            <td class="photo-item-desc">Фото</td>
            <td>Тип</td>
            <td>Місто</td>
            <td>Площа, м²</td>
            <td>Кімнати</td>
            <td>Ціна</td>
            <td v-if="isAuth">Дії</td>
          </tr>
          <tr v-for="(item, index) in realty" :key="index" class="item">
            <td>
              <img v-if="item.photo" :src="serverURL + /uploads/ + item.photo" alt="photo" class="realtyPhoto">
            </td>
            <td>{{ item.type }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.area }}</td>
            <td>{{ item.rooms }}</td>
            <td>${{ item.price }}</td>
            <td v-if="isAuth && !isAdmin">
              <button class="fa-button" v-if="!wishList.includes(item.id)" @click="addToWishList(item.id)">
                <font-awesome-icon :icon="['far', 'heart']"/>
              </button>
              <button class="fa-button" v-else @click="deleteFromWishList(item.id)">
                <font-awesome-icon :icon="['fas', 'heart']"/>
              </button>
              <button class="fa-button" @click="buyRealty(item.id)">
                <font-awesome-icon :icon="['fas', 'shopping-cart']"/>
              </button>
            </td>
            <td v-if="isAuth && isAdmin">
              <button class="fa-button" @click="toEditPage(item.id)">
                <font-awesome-icon :icon="['fas', 'pen']"/>
              </button>
              <button class="fa-button" @click="deleteRealty(item.id)">
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
import {serverURL} from "@/api/axiosInstance";

export default {
  data() {
    return {
      realty: [],
      serverURL,
      wishList: [],
      isAuth: localStorage.getItem('isAuth') || null,
      isAdmin: localStorage.getItem('isAdmin') || null,
    }
  },

  methods: {
    async getRealty() {
      const response = await api.realty.getRealty();
      this.realty = response;
    },
    async toCreatePage() {
      this.$router.push('/realty/new');
    },
    async toEditPage(id) {
      this.$router.push(`/realty/${id}`);
    },
    async deleteRealty(id) {
      await api.realty.deleteRealty(id);
      await this.getRealty();
    },
    async buyRealty(id) {
      const formBody = {realtyId: id}
      await api.realty.buyRealty(formBody);
      await this.getRealty();
    },
    async getWishList() {
      this.wishList = await api.users.getWishList();
    },
    async addToWishList(id) {
      const formBody = {
        realtyId: id,
      }
      await api.users.addToWishList(formBody);
      await this.getWishList();
    },
    async deleteFromWishList(id) {
      const formBody = {
        realtyId: id,
      }
      await api.users.deleteFromWishList(formBody);
      await this.getWishList();
    }
  },

  async mounted() {
    await this.getRealty();
    if(this.isAuth) {
      await this.getWishList();
    }
  },
}
</script>