<template>
  <div id="app">
    <div class="container">
      <h1 class="no-select">Drummer App</h1>
      <drum-pad></drum-pad>
    </div>
  </div>
</template>

<script>
import DrumPad from './components/DrumPad.vue'

export default {
  name: 'app',
  components: {
    DrumPad: DrumPad
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: grid;
  max-width: 80%;
  margin: auto;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
}

.no-select {
  user-select: none;
}
</style>
