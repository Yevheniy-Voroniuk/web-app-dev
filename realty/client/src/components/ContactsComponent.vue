<template>
  <div class="wrapper">
    <div class="contacts">
      <div class="contacts-item">
        <i class="fa-icon">
          <font-awesome-icon :icon="['fas', 'globe-europe']"/>
        </i>
        <div class="contact-info">
          <a href="https://maps.app.goo.gl/532qj7rLWiJvTJDx9" target="_blank">
            Наша адреса</a
          >
          <p>Ми знаходимося за адресою вул. Ділова, 1/2, Київ, 03150</p>
        </div>
      </div>
      <div class="contacts-item">
        <i class="fa-icon">
          <font-awesome-icon :icon="['fas', 'phone']" />
        </i>
        <div class="contact-info">
          <a href="tel:+380989143506" target="_blank"> Телефон</a>
          <p>Зателефонувати нам на мобільний</p>
        </div>
      </div>
      <div class="contacts-item">
        <i class="fa-icon">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </i>
        <div class="contact-info">
          <a href="mailto:andriitiuska@gmail.com" target="_blank"> Пошта</a>
          <p>Написати нам на електронну пошту</p>
        </div>
      </div>
      <div class="contacts-item">
        <i class="fa-icon">
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </i>
        <div class="contact-info">
          <a href="https://t.me/woocle1" target="_blank"> Telegram</a>
          <p>Написати нашому менеджеру у Telegram</p>
        </div>
      </div>
      <div class="contacts-item">
        <i class="fa-icon">
          <font-awesome-icon :icon="['fab', 'viber']" />
        </i>
        <div class="contact-info">
          <a href="viber://chat?number=+380989143506" target="_blank"> Viber</a>
          <p>Написати нашому менеджеру у Viber</p>
        </div>
      </div>
      <div class="contacts-item">
        <i class="fa-icon">
          <font-awesome-icon :icon="['fas', 'comment']" />
        </i>
        <div class="contact-info">
          <a href="sms:+0989143506" target="_blank"> SMS</a>
          <p>Надіслати нашому менеджеру SMS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
