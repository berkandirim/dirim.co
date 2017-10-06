<template>
  <h1 class="logo">
    <img class="logo" src="~/assets/images/logo.png" :srcset="`${retinaLogo} 2x`" alt="Berkan Dirim" rel="logo">
  </h1>
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
