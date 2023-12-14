<template>
  <header-component></header-component>
  <users-component></users-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import UsersComponent from "@/components/UsersComponent.vue";

export default {
  components: { HeaderComponent, UsersComponent, FooterComponent }
}
</script>