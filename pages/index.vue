<template>
  <div>
    <div class="container">
      <transition>
        <nuxt-child></nuxt-child>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1280px;
  text-align: center;
  padding-top: 62px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
