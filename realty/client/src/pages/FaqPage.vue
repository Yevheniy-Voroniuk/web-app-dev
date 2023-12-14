<template>
  <header-component></header-component>
  <faq-component></faq-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FaqComponent from "@/components/FaqComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {HeaderComponent, FaqComponent, FooterComponent}
}
</script>
