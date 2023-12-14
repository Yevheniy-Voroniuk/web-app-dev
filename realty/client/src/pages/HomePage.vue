<template>
  <header-component></header-component>
  <div class="page-b-black">
    <slider-component></slider-component>
    <br><br><br>
    <RealtyComponent></RealtyComponent>
    <br><br><br>
    <ServicesComponent></ServicesComponent>
    <br><br><br>
    <about-component></about-component>
  </div>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RealtyComponent from "@/components/RealtyComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import SliderComponent from "@/components/SliderComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  components: {HeaderComponent, SliderComponent, RealtyComponent, ServicesComponent, AboutComponent, FooterComponent},
  mounted() {
    const tables = document.querySelectorAll('.wrapper');
    const tableRealty = tables[0];
    const tableServices = tables[1];
    tableRealty.classList.remove('wrapper');
    tableServices.classList.remove('wrapper');
    const tablesHome = document.querySelector('.page-b-black');
    tablesHome.classList.add('wrapper');
  }
}
</script>