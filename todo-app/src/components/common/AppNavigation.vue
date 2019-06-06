<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>
<style lang="scss">
  #nav {
    width: 100%;
    height: 60px;
  }
</style>
