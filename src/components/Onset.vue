<template>
  <div>
    <datetime format="YYYY-MM-DD" v-model='dob'></datetime>
    <button @click="alertVal">Alert current date value</button>
    Onset of booking goes here!
    <input type="text" class="text-input">
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
      msg: 'Welcome to Booking Vue.js App',
      onset_item: {
        'id': 1,
        'check-in-date': '20.08.2010',
        'check-out-date': '20.08.2010',
        'room_type': 'Standard'
      }
    }
  },
  methods: {
    alertVal () {
      alert(this.dob)
    }
  }
}
</script>


<style lang="scss">
  .text-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    border: rgb(238, 238, 238) solid 1px;

    &:focus {
      outline:0;
    }
  }


  .vdatetime-input { 
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    border: rgb(238, 238, 238) solid 1px;

    &:focus {
      outline: 0;
    }
  }

  .onset_booking_form {

  }

</style>
