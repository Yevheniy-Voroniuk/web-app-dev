<template>
  <div>
    <PageHeader></PageHeader>
  </div>

  <div>
    <PageRegistration></PageRegistration>
  </div>

  <div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageRegistration from "@/components/PageRegistration.vue";
export default {
  components: {
    PageHeader,
    PageFooter,
    PageRegistration
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Barlow:wght@100&family=Inter:wght@400;800&family=Rajdhani:wght@300&family=Raleway&family=Roboto:wght@900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background-image: url(assets/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>