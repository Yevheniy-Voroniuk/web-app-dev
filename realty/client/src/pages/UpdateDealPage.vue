<template>
  <header-component></header-component>
  <update-deal-component></update-deal-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import UpdateDealComponent from "@/components/UpdateDealComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeaderComponent, UpdateDealComponent, FooterComponent }
}
</script>