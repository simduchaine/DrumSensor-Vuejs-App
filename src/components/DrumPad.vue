<template>
    <div id="drumpad">
      <single-drum v-for="drum in drums" :class="'drum-'+drum.id" :key="drum.id" :drum="drum" :pad="pad" @selected="selectedDrum"></single-drum>
    </div>
</template>

<script>
import SingleDrum from './SingleDrum'

export default {
  name: 'DrumPad',
  components: {
    SingleDrum: SingleDrum
  },
  data: function () {
    return {
      pad: {
        intensity: null,
        selectedPad: null,
        strokeType: null
      },
      tap: false,
      drums: [
        {
          name: 'Crash Cymbal',
          id: 1,
          sound: '../sounds/crash.wav'
        },
        {
          name: 'Small Tom',
          id: 2,
          sound: '../sounds/tom.wav'
        },
        {
          name: 'Medium Tom',
          id: 3,
          sound: '../sounds/tom2.wav'
        },
        {
          name: 'Ride Cymbal',
          id: 4,
          sound: '../sounds/ride.wav'
        },
        {
          name: 'Hi Hat',
          id: 5,
          sound: '../sounds/hihat.wav'
        },
        {
          name: 'Bass Drum',
          id: 6,
          sound: '../sounds/kick.wav'
        },
        {
          name: 'Crash Cymbal',
          id: 7,
          sound: '../sounds/crash.wav'
        },
        {
          name: 'Snare',
          id: 8,
          sound: '../sounds/snare.wav'
        },
        {
          name: 'Floor Tom',
          id: 9,
          sound: '../sounds/tom.wav'
        }
      ]
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    serialData (data) {
      let randomPad = function (min, max) { min = Math.ceil(min); max = Math.floor(max); return Math.floor(Math.random() * (max - min + 1)) + min; }
      let buffer = JSON.parse(data)
      this.pad.selectedPad = randomPad(1, 9) // buffer.data[1]
      this.pad.intensity = buffer.data[2]
      this.pad.strokeType = buffer.data[3]
    }
  },
  methods: {
    selectedDrum (drum) {
      console.log(drum.id + ': ' + drum.name)
    }
  }
}
</script>

<style lang="scss" scoped>

#drumpad {
    border: 1px solid gray;
    width: 1200px;
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 2%;
    background: white;
}

.drum-6 {
  grid-area: span 2 / span 2;
}

</style>
