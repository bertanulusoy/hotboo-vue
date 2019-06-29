<template>
  <div>
    <datetime format="YYYY-MM-DD" v-model='dob'></datetime>
    <button @click="alertVal">Alert current date value</button>
    Onset of booking goes here!
  </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker'

export default {
  name: 'Onset',
  components: {
    datetime
  },
  data () {
    return {
      msg: 'Welcome to Booking Vue.js App'
    }
  },
  methods: {
    alertVal () {
      alert(this.dob)
    }
  }
}
</script>


<style>
</style>
