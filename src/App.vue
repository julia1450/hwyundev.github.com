<template>
  <div id="app">
    <AppHeader />
    <Introduce />
    <Skill />
    <Works />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Introduce from './components/Introduce.vue'
import Skill from './components/Skill.vue'
import Works from './components/Works.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Introduce,
    Skill,
    Works
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  overflow: overlay;
  /* 스크롤바 투명하게 (explorer 호환) */
  -ms-overflow-style: none;
}

#app::-webkit-scrollbar {
  display: none;
}

.section .inner {
  max-width: 1500px;
  margin: 0 auto;
}

.section + .section {
  margin-top: 30px;
}

.section:first-child + .section {
  margin-top: 0;
}

.section-title {
  margin-bottom: 10px;
  font-size: 20px;
}
</style>
