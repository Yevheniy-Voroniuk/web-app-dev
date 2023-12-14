<template>
  <header-component></header-component>
  <realty-component></realty-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RealtyComponent from "@/components/RealtyComponent.vue";
export default {
  components: { HeaderComponent, RealtyComponent, FooterComponent }
}
</script>