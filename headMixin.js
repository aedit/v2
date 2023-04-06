export default {
  head() {
    return {
      title: this.title,
      link: [
        this.checkDark
          ? { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.png' }
          : { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        {
          rel: 'canonical',
          href: 'https://aedit.me',
        },
      ],
      meta: [
        { name: 'author', content: 'Udit Sen' },
        {
          property: 'og:title',
          content: 'Hi, I am Udit Sen | Full-Stack Developer',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content:
            'https://cdn.discordapp.com/attachments/1093625537630580819/1093625747094110268/portfolio.png',
        },
        {
          property: 'og:image:url',
          content:
            'https://cdn.discordapp.com/attachments/1093625537630580819/1093625747094110268/portfolio.png',
        },
        {
          property: 'og:url',
          content: 'https://aedit.me',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'description',
          content:
            'Looking for a highly skilled Full-stack Web Developer? Look no further than Udit Sen. With expertise in Vue.js, React.js, HTML/CSS, JavaScript and Node.js, Udit is the perfect collaborator for your exciting projects. Contact Udit today and take your web development to the next level.',
        },
        {
          property: 'keywords',
          content:
            'Udit Sen, aedit.me, aeditme, agreyguy, Udit, Sen, Website Developer, Frontend Developer, UI Developer, Full stack developer, Vue.js, HTML, CSS, HTML/CSS, Portfolio, JavaScript, React.js, React, Vue, Node, Node.js, MongoDB, UI, UX, UI/UX, Front-end development, back-end development, Backend developer, Front-end developer, Back-end developer, Portfolio, Angular, Bootstrap, SCSS, LESS, Responsive Design, API Integration, Web applications, Wesbite development, HTML Emails, HTML Emailers, Emails, Python, SQL, MySQL',
        },
      ],
    }
  },
  methods: {
    checkDark() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    },
  },
}
