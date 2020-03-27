<template>
  <div class="page-wrapper">
    <header class="info section">
      <logo/>
      <info/>
    </header>
    <projects/>
    <skills class="section"/>
    <links/>
    <div v-if="!online" :class="['network', online ? 'online' : 'offline']">
      <div class="circle"></div>
      {{ online ? 'online' : 'offline' }}
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Projects from '~/components/Projects.vue'
  import Info from '~/components/Info.vue'
  import Links from '~/components/Links.vue'
  import Skills from '~/components/Skills.vue'

  export default {
    components: {Logo, Projects, Info, Links, Skills},
    data () {
      return {
        online: true
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/vars";

  .page-wrapper {
    max-width: 720px;
    margin: auto;
    padding: 30px;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
    @media screen and (min-width: 1025px) {
      max-width: 960px;
      margin-top: 100px;
    }
  }

  .section {
    margin-bottom: 3em;
  }

  .network {
    display: inline-block;
    padding: 4px 6px;
    background-color: rgba(255,255,255, .6);
    position: fixed;
    bottom: 6px;
    right: 6px;
    font-weight: 400;
    font-size: .75rem;
  }

  .network .circle {
    display: inline-block;
    vertical-align: middle;
    width: .75rem;
    height: .75rem;
    background: green;
    border-radius: 1rem;
  }

  .network.offline .circle {
    background: red;
  }
</style>
