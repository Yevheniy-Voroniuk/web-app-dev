<template>
  <header>
    <div class="lds-heart">
      <div></div>
    </div>
    <div class="title">Real estate agency</div>
    <ul>
      <li>
        <a href="">Головна</a>
      </li>
      <li>
        <a href="">FAQ</a>
      </li>
      <li>
        <a href="">Контакти</a>
      </li>
      <li>
        <a href="">CRM</a>
      </li>
      <li class="authorization-button">
        <a href="">Увійти</a>
      </li>
      <li class="registration-button">
        <a href="">Зареєструватись</a>
      </li>
    </ul>
  </header>
</template>

<style>
header {
  background-color: black;
  height: 100px;
  padding: 15px;
  display: flex;
  align-items: center;
  font-weight: 800;
}

header ul {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  white-space: nowrap;
}

header ul li {
  list-style-type: none;
  margin: 0 35px;
  font-size: 17px;
  font-weight: 400;
  display: flex;
}

header ul li a {
  text-decoration: none;
  color: white;
}

.title {
  font-size: xx-large;
  padding-left: 40px;
  color: white;
}

.authorization-button {
  text-decoration: underline #fff;
}

.registration-button {
  text-decoration: underline #fff;
}

.lds-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}

.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: white;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: white;
}

.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}

.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}

@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}.lds-heart {
   display: inline-block;
   position: relative;
   width: 80px;
   height: 80px;
   transform: rotate(45deg);
   transform-origin: 40px 40px;
 }

.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: white;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: white;
}

.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}

.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}

@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}

@media (max-width: 1250px) {
  header ul li {
    margin: 0 10px;
    font-size: 10px;
  }

  .title {
    font-size: 15px;
  }

  header ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 10px;
    font-size: 14px;
  }
}
</style>