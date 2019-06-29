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

body {
  background-image: url('./assets/sun_sunset_background.jpg');
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

#booking-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 220px;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>
