<template>
  <div class="contact">
    <form class="contact__form" autocomplete="off" @submit="call">
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
        <button
          id="submit"
          class="border-primary px-9 py-1 rounded fw-400 mr-3"
        >
          Send
        </button>
        <button
          type="button"
          class="border-primary px-9 py-1 rounded fw-400 d-flex-center"
          @click="sendWhatsappMessage"
        >
          <i class="icon-whatsapp mr-2"></i> Whatsapp
        </button>
      </div>
    </form>
    <div class="contact__content">
      <h1 class="color-primary">Let's get in touch!</h1>
      <h3 class="px-9 mt-3 fw-400">
        You can fill the form, hit send or whatsapp me. Also, you can reach me
        out on the below social links.
      </h3>
    </div>
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
  methods: {
    call(evt) {
      evt.preventDefault()
    },
    prepareMessage() {
      let message = 'Hi Udit,\n'
      if (this.contactName.length) message += `I am ${this.contactName},\n\n`
      if (this.contactMessage) message += this.contactMessage + '\n'
      if (this.contactEmail)
        message += `You can contact me on ${this.contactEmail}`
      return encodeURI(message)
    },
    sendWhatsappMessage() {
      const message = this.prepareMessage()
      window.open(`https://wa.me/919826942288?text=${message}`, '_blank')
    },
  },
}
</script>
