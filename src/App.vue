<template>
  <div id="app">
    <AppHeader/>
    <router-view></router-view>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    
  }
}
</script>

<style>
html, body {
  margin: 0;
  overflow: overlay;
  height: 100vh;
  /* 스크롤바 투명하게 (explorer 호환) */
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.section .inner {
  max-width: 1500px;
  margin: 0 auto;
}

.section {
  padding-top: 30px;
  padding-bottom: 30px;
}

.section:first-child + .section {
  margin-top: 0;
}

.section-title {
  margin-bottom: 10px;
  font-size: 20px;
}
</style>
