<template>
  <header>
    <div class="lds-heart">
      <div></div>
    </div>
    <div>
      <router-link to="/" class="title">Real estate agency</router-link>
    </div>
    <ul>
      <li v-if="isAdmin">
        <router-link to="/realty">Нерухомість</router-link>
      </li>
      <li v-if="isAdmin">
        <router-link to="/services">Сервіси</router-link>
      </li>
      <li>
        <router-link to="/reviews">Відгуки</router-link>
      </li>
      <li v-if="isAdmin">
        <router-link to="/deals">Угоди</router-link>
      </li>
      <li v-if="isAdmin">
        <router-link to="/users">Користувачі</router-link>
      </li>
      <li v-if="!isAuth" class="auth-button">
        <router-link to="/login">Увійти</router-link>
      </li>
      <li v-if="!isAuth" class="auth-button">
        <router-link to="/register">Зареєструватись</router-link>
      </li>
      <li v-if="isAuth" class="auth-button">
        <router-link to="/logout">Вийти</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isAuth: localStorage.getItem('isAuth') || null,
      isAdmin: localStorage.getItem('isAdmin') || null,
    };
  },
};
</script>