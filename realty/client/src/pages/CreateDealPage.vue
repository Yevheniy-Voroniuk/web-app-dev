<template>
  <header-component></header-component>
  <create-deal-component></create-deal-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CreateDealComponent from "@/components/CreateDealComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeaderComponent, CreateDealComponent, FooterComponent }
}
</script>