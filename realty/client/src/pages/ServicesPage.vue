<template>
  <header-component></header-component>
  <services-component></services-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  components: { HeaderComponent, ServicesComponent, FooterComponent }
}
</script>