<template>
  <footer class="contact section">
    <h2>Contact</h2>
    <ul class="contact-links">
      <li v-for="link in links" :key="link.name">
        <a
          class="link"
          :title="link.name"
          :href="link.link"
          target="_blank"
          rel="noreferrer"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'LinkedIn',
          link: 'https://tr.linkedin.com/in/berkandirim',
        },
        {
          name: 'Github',
          link: 'https://www.github.com/berkandirim',
        },
        {
          name: 'Email',
          link: 'mailto:berkandirim@gmail.com',
        },
        {
          name: 'Twitter',
          link: 'https://www.twitter.com/berkandirim',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.contact {
  &-links {
    margin-left: -4px;
    overflow-x: auto;
    li {
      @media screen and (min-width: 721px) {
        display: inline-block;
        & + li:before {
          content: '/';
          margin: 0 10px;
        }
      }
    }
    a {
      margin: 6px 0;
      @media screen and (min-width: 721px) {
        margin: 0;
      }
    }
  }
}
</style>
