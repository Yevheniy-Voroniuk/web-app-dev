<template>
  <header-component></header-component>
  <deals-component></deals-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import DealsComponent from "@/components/DealsComponent.vue";

export default {
  components: { HeaderComponent, DealsComponent, FooterComponent }
}
</script>