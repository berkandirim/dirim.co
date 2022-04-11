<template>
  <section class="projects section">
    <h2 class="section-title">Some Projects</h2>
    <p>Here are a few personal and commercial projects.</p>
    <ul class="project-list">
      <li v-for="project in projects" :key="slugify(project.name)">
        <h3 class="project-name">
          {{ project.name }}
        </h3>
        [<a class="link" :href="project.link" target="_blank" rel="noreferrer"
          >Link</a
        >]
        <p v-html="project.description"></p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    slugify(str) {
      return str.toLowerCase().split(' ').join('-')
    }
  },
  data() {
    return {
      projects: [
        {
          name: 'HTMplar',
          link: 'https://github.com/adidas/htmplar',
          description:
            'HTMplar is a React to HTML converter. It is created for developer friendly e-mail template development. By leveraging the component structure with React, it composes a reusable and maintainable pipeline for the projects.'
        },
        {
          name: 'Luxbar Hide',
          link: 'https://github.com/berkandirim/luxbar-hide',
          description:
            'A luxbar plugin to hide <a target="_blank" class="link" href="https://github.com/balzss/luxbar">luxbar</a> while scrolling down.'
        },
        {
          name: 'Line Breaker',
          link: 'https://github.com/berkandirim/line-breaker',
          description:
            'Command line tool that inserts line breaks to a given string after specified length and delimiter.'
        },
        {
          name: 'jQuery Listswap',
          link: 'http://berkandirim.github.io/jquery-listswap',
          description:
            'A jquery plugin that lets you swap options between select lists.'
        }
      ],
      archived: [
        {
          name: 'Publing Display',
          link: 'https://www.publing.co/',
          description:
            'Collect all content related to your business and display it on many different screens. I have developed a UI and different themes for this project.'
        },
        {
          name: 'Publing Social Grader',
          link: 'https://grader.publing.co/',
          description:
            'Grade your social media, get recommendations on how to improve your online presence. The UI is developed by me.'
        },
        {
          name: 'Jekyll UXRocket',
          link: 'https://github.com/berkandirim/jekyll-uxrocket',
          description:
            'A Jekyll boilerplate using <a class="link" href="https://github.com/uxrocket">UX Rocket</a> elements, <a class="link" href="https://github.com/bcinarli/melange">Melange</a> and <a class="link" href="https://github.com/bcinarli/caffeine">Caffeine</a>.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.project-list {
  list-style: none;
  p {
    margin-bottom: 1rem;
  }
}

.project-name {
  padding: 2px 0 0;
}
</style>
