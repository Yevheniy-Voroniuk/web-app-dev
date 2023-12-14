<template>
  <header-component></header-component>
  <contacts-component></contacts-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ContactsComponent from "@/components/ContactsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {HeaderComponent, ContactsComponent, FooterComponent}
}
</script>
