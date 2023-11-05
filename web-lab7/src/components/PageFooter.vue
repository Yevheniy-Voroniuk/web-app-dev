<template>
  <footer>
    <a href="https://t.me/woocle1">
      <i class="fa-brands fa-telegram"></i> Telegram
    </a>
    <a href="tel:+380989143506">
      <i class="fa-solid fa-phone"></i> Зателефонувати
    </a>
    <a href="mailto:andriitiuska@gmail.com">
      <i class="fa-solid fa-envelope"></i> Написати нам
    </a>
    <a href="viber://chat?number=+380687246753">
      <i class="fa-brands fa-viber"></i> Viber
    </a>
  </footer>
</template>

<style>
footer {
  color: #fff;
  background-color: black;
  height: 100px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  bottom: 0;
  width: 100%
}

footer a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}

footer a:hover {
  color: #846a1c;
}

@media (max-width: 1250px) {
  footer {
    flex-direction: column;
    justify-content: center;
    height: 150px;
  }
}
</style>