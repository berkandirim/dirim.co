<template>
  <nuxt/>
</template>

<style lang="scss">
  @import "../assets/scss/vars";
  @import "../assets/scss/reset";

  html {
    font-family: $monospace-font;
    font-size: $text-size;
    line-height: $line-height;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    @media screen and (min-width: 721px) {
      font-size: $large-text-size;
    }
  }

  body {
    background-color: $color-white;
    color: $color-black;
    text-rendering: optimizeLegibility;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  p {
    margin-bottom: 1em;
  }

  .link {
    display: inline-block;
    padding: 3px 4px 0;
    color: $color-black;
    text-decoration: none;
    transition: all ease-in-out 200ms;
    border-bottom: 1px solid;
    &:hover {
      color: $color-black;
      background-color: $color-light-gray;
      border-bottom: 1px solid rgba(255,255,255,0);
    }
  }

  h1 {
    font-size: 1em;
    margin-bottom: .2em;
  }

  h2 {
    font-size: 1em;
    margin-bottom: 1em;
    padding-bottom: .25em;
    border-bottom: 1px dashed;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: .5em;
  }
</style>
