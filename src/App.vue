<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
$font-6:12px;

#app {
  h1{
    font-size: $font-6*3;
  }
  h2{
    font-size: $font-6*2.5;
  }
  h3{
    font-size: $font-6*2;
  }
  h4{
    font-size: $font-6*1.5;
  }
  h5{
    font-size: $font-6*1.3;
  }
  h6{
    font-size: $font-6;
  }
  strong{
    font-weight: 900;
  }
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
  // background: #F4F6F3;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img/bg.jpg');
  background-size: contain;
}
@media screen and (max-width:768px) {
  #app {
      h1{
        font-size: $font-6*2.3;
      }
      h2{
        font-size: $font-6*2;
      }
      h3{
        font-size: $font-6*1.7;
      }
      h4{
        font-size: $font-6*1.3;
      }
      h5{
        font-size: $font-6*1.2;
      }
      h6{
        font-size: $font-6;
      }
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
