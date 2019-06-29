<template>
  <div> 
  </div>
</template>

<script> 

import { Datetime } from 'vue-datetime'; 
import 'vue-datetime/dist/vue-datetime.css'

export default {
  name: 'RoomList',
  components: {
    datetime: Datetime,  
  },
  data () {
    return { 
      booking_list: [ 
        {
          'id': 1,
          'hotel_id': 150,
          'check-in-date': '20.08.2020',
          'check-out-date': '25.08.2020',
        },
        {
          'id': 1,
          'hotel_id': 420,
          'check-in-date': '20.08.2020',
          'check-out-date': '25.08.2020',
        }
      ],
    }
  },
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
      outline: 0;
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
