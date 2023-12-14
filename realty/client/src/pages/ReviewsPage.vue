<template>
  <header-component></header-component>
  <reviews-component></reviews-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ReviewsComponent from "@/components/ReviewsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeaderComponent, ReviewsComponent, FooterComponent }
}
</script>