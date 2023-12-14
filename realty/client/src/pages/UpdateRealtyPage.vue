<template>
  <header-component></header-component>
  <update-realty-component></update-realty-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import UpdateRealtyComponent from "@/components/UpdateRealtyComponent.vue";

export default {
  components: {HeaderComponent, UpdateRealtyComponent, FooterComponent}
}
</script>