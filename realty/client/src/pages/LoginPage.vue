<template>
  <header-component></header-component>
  <login-component></login-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {HeaderComponent, LoginComponent, FooterComponent}
}
</script>