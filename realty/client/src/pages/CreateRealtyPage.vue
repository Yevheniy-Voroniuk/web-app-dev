<template>
  <header-component></header-component>
  <create-realty-component></create-realty-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CreateRealtyComponent from "@/components/CreateRealtyComponent.vue";

export default {
  components: {HeaderComponent, CreateRealtyComponent, FooterComponent}
}
</script>