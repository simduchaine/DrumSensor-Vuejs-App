<template>
  <div>
    <svg height="150" width="150" @click="playSound" class="single-drum">
        <circle cx="75" cy="75" r="60" stroke="black" stroke-width="1" fill="transparent" />
    </svg>
    <p class="no-select">{{ drum.name }}</p>
  </div>
</template>

<script>
import Wad from 'web-audio-daw'

export default {
  props: ['drum', 'pad'],
  data () {
    return {
      sound: {}
    }
  },
  methods: {
    initSound () {
      this.sound = new Wad({
        source: [this.drum.sound],
          volume: 0.7
      })
    },
    playSound () {
      this.sound.play()
    },
    select (drum) {
      this.$emit('selected', drum)
    },
    playOnTap () {
      this.sound.play({
        //volume: (this.pad.intensity) / 200
        })
    }
  },
  watch: {
    'pad.intensity': function () {
      if (this.pad.selectedPad === this.drum.id) {
        this.playOnTap()
      }
    }
  },
  mounted () {
    this.initSound()
  }
}
</script>

<style scoped>
.single-drum {
  cursor: url(../assets/drumstick.png), auto;
    border-radius: 50%;
    background: beige;
}

.single-drum:active {
  animation: pulse 0.2s ease-out;
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}

</style>
