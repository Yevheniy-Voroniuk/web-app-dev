<template>
  <div class="page-b-black">
    <div class="wrapper">
      <div id="table-div">
        <button class="fa-button" @click="toCreatePage()">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
        <table id="table">
          <tr>
            <td class="table-radius1">Ім’я</td>
            <td>Прізвище</td>
            <td>Email</td>
            <td>Номер</td>
            <td>Роль</td>
            <td class="table-radius2">Дії</td>
          </tr>
          <tr v-for="(item, index) in users" :key="index" class="item">
            <td>{{ item.name }}</td>
            <td>{{ item.surname }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.role }}</td>
            <td>
              <button class="fa-button" @click="toEditPage(item.id)">
                <font-awesome-icon :icon="['fas', 'pen']" /></button>
              <button class="fa-button" @click="deleteUser(item.id)">
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

export default {
  data() {
    return {
      users: [],
    }
  },

  methods: {
    async getUsers() {
      const response = await api.users.getUsers();
      this.users = response;
    },
    async toCreatePage() {
      this.$router.push('/users/new');
    },
    async toEditPage(id) {
      this.$router.push(`/user/${id}`);
    },
    async deleteUser(id) {
      await api.users.deleteUser(id);
      await this.getUsers();
    },
  },

  async mounted() {
    await this.getUsers();
  },
}
</script>