<template>
  <header-component></header-component>
  <create-user-component></create-user-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CreateUserComponent from "@/components/CreateUserComponent.vue";

export default {
  components: {HeaderComponent, CreateUserComponent, FooterComponent}
}
</script>