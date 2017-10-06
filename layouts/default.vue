<template>
  <nuxt/>
</template>

<style lang="scss">
  @import "../assets/scss/vars";
  @import "../assets/scss/reset";

  html {
    font-family: $sans-font;
    font-size: $text-size;
    line-height: $line-height;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    @media screen and (min-width: 1025px) {
      font-size: $text-size/2*3;
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
    margin-bottom: 2em;
  }

  a {
    color: $link-color;
    text-decoration: none;
    transition: all ease-in-out 200ms;
    &:hover {
      color: $color-black;
    }
  }

  h1 {
    margin-bottom: .2em;
  }

  h2 {
    margin-bottom: 1em;
    font-size: .75rem;
    font-weight: 400;
    letter-spacing: .2em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1rem;
  }
</style>
