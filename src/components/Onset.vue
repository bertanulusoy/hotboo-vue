<template>
  <div class="onset_booking_form">
    <div>
      <datetime  format="DD-MM-YYYY" v-model='dob'></datetime>
    </div>
    <div>
      <datetime format="DD-MM-YYYY" v-model='dob'></datetime>
    </div>
    <div>
      <select class="select-box-input" v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div><button>Check-in</button></div>
    

  </div>  
  <!--<button @click="alertVal">Alert current date value</button>-->
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
      },
      dob: ''
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

  button {
    font-size: 14px;
    background-color: white;
    appearance: none;
    width: 10rem;
    height: 2.7rem;
    margin-left: 0.7rem;

    &:hover {
      background: #42b883;
      color: #35495e;
    }

    &:focus {
      outline: none;
    }
  }

  .text-input {
    min-width: 226px;
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;

    &:focus {
      outline:0;
    }
  }

  .select-box-input {
    min-width: 226px;
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    height: 45px;

    &:focus {
      outline:0;
    }
  }

  .datetime-picker { 
    
    margin-right: 16px;

    &:focus {
      outline: 0;
    }
    div>input {
      height: 45px;
      font-size: 18px;
      color:#35495e;
    }
  }

  .onset_booking_form {
    margin: 100px auto;
    display:flex;   
    width: 50%;
  }

</style>
