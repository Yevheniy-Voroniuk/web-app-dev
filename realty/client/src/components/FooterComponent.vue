<template>
  <footer>
    <a href="https://t.me/woocle1">
      <font-awesome-icon :icon="['fab', 'telegram']"/>
      Служба підтримки
    </a>
    <router-link to="/contacts">
  <span>
    <font-awesome-icon :icon="['fas', 'phone']"/>
    Контакти
  </span>
    </router-link>
    <router-link to="/faq">
  <span>
    <font-awesome-icon :icon="['fas', 'comments']"/>
    Часті запитання
  </span>
    </router-link>
  </footer>
</template>

<script>

</script>