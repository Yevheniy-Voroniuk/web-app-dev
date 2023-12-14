<template>
  <header-component></header-component>
  <update-user-component></update-user-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import UpdateUserComponent from "@/components/UpdateUserComponent.vue";

export default {
  components: {HeaderComponent, UpdateUserComponent, FooterComponent}
}
</script>