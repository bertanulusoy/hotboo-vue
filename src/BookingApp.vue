<template>
  <div id="booking-app" class="container">
    <img class="logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'BookingApp',
}
</script>


<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: aliceblue;
  background-image: url('./assets/Hotels_Resort.jpg')
}

#booking-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>
