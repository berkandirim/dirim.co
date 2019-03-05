<template>
  <footer class="contact section">
    <h2 class="section-title">Contact / Follow Me</h2>
    <div class="contact-links">
      <a
        v-for="link in links"
        :key="link.name"
        :title="link.name"
        :href="link.link"
        target="_blank"
      >{{link.name}}</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Twitter",
          link: "https://www.twitter.com/berkandirim"
        },
        {
          name: "LinkedIn",
          link: "https://tr.linkedin.com/in/berkandirim"
        },
        {
          name: "Github",
          link: "https://www.github.com/berkandirim"
        },
        {
          name: "Codepen",
          link: "https://www.codepen.io/berkandirim/"
        },
        {
          name: "Email",
          link: "mailto:berkandirim@gmail.com"
        }
      ]
    };
  }
};
</script>
