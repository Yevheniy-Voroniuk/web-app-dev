<template>

</template>

<script>
import api from '@/api';
import {deleteFromLocalStorage} from "@/utils/LocalStorage";

export default {
  methods: {
    async submitRequest() {
      await api.auth.logout();
      deleteFromLocalStorage();
      this.$router.push('/');
    },
  },
  async mounted() {
    await this.submitRequest()
  },
}
</script>