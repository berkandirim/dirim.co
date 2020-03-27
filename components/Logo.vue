<template>
  <div>
    <img class="logo" src="~/assets/images/logo.png" :srcset="`${retinaLogo} 2x`" alt="Berkan Dirim" rel="logo">
    <h1 class="site-title">
      Berkan Dirim
    </h1>
  </div>

</template>

<script>
  import retinaLogo from '~/assets/images/logo@2x.png'

  export default {
    computed: {
      retinaLogo () {
        return retinaLogo
      }
    }
  }
</script>

<style lang="scss">
  .logo {
    margin-bottom: 1em;
  }
</style>
