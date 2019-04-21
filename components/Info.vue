<template>
  <p class="info-text">Hi! I'm <strong>Berkan Dirim.</strong><br>I'm a frontend developer currently located in Nuremberg and working at <a href="https://www.adidas-group.com/" target="_blank">adidas</a>.</p>
</template>

<style lang="scss">
  @import "../assets/scss/vars";

  .contact {
    &-links {
      margin-left: -4px;
      overflow-x: auto;
      padding: 0 0 10px;
      a {
        padding: 4px;
        margin-right: 4px;
        color: $color-gray;
        &:hover {
          color: $color-black;
        }
      }
    }
  }
</style>
