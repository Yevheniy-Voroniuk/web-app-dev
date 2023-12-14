<template>
  <header-component></header-component>
  <update-service-component></update-service-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import UpdateServiceComponent from "@/components/UpdateServiceComponent.vue";

export default {
  components: {HeaderComponent, UpdateServiceComponent, FooterComponent}
}
</script>