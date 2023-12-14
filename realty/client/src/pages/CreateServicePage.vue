<template>
  <header-component></header-component>
  <create-service-component></create-service-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CreateServiceComponent from "@/components/CreateServiceComponent.vue";

export default {
  components: {HeaderComponent, CreateServiceComponent, FooterComponent}
}
</script>