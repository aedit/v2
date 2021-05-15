<template>
  <div class="contact">
    <form action="" class="contact__form" autocomplete="off">
      <div class="contact__form__input mb-6">
        <input
          v-model="contactName"
          required
          type="text"
          placeholder="Your Name"
          autocomplete="false"
        />
      </div>
      <div class="contact__form__input mb-6">
        <input
          v-model="contactEmail"
          required
          type="email"
          name=""
          placeholder="Your Email"
        />
      </div>
      <div class="contact__form__input mb-6">
        <textarea
          v-model="contactMessage"
          required
          rows="8"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div class="contact__form__actions d-flex">
        <button class="border-primary px-9 py-1 rounded fw-400 mr-3">
          Send
        </button>
        <button class="border-primary px-9 py-1 rounded fw-400 d-flex-center">
          <i class="icon-whatsapp mr-2"></i> Whatsapp
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactName: '',
      contactEmail: '',
      contactMessage: '',
    }
  },
}
</script>
