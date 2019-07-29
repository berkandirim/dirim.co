<template>
  <footer class="contact section">
    <h2 class="section-title">Contact - Follow</h2>
    <ul class="contact-links">
      <li v-for="link in links"
          :key="link.name">
        <a
          :title="link.name"
          :href="link.link"
          target="_blank"
        >{{link.name}}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: 'Twitter',
          link: 'https://www.twitter.com/berkandirim'
        },
        {
          name: 'LinkedIn',
          link: 'https://tr.linkedin.com/in/berkandirim'
        },
        {
          name: 'Github',
          link: 'https://www.github.com/berkandirim'
        },
        {
          name: 'Email',
          link: 'mailto:berkandirim@gmail.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/vars";

  .contact {
    &-links {
      margin-left: -4px;
      overflow-x: auto;
      li {
        @media screen and (min-width: 721px) {
          display: inline-block;
          &+li:before {
            content: '/';
            margin: 0 10px;
          }
        }
      }
      a {
        display: inline-block;
        padding: 6px 4px;
        color: $color-gray;
        @media screen and (min-width: 721px) {
          padding: 0 4px;
        }
        &:hover {
          color: $color-black;
        }
      }
    }
  }
</style>
