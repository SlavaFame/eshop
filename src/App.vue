<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
  <footerbar></footerbar>
</template>

<script>
import Navbar from '@/components/NavBar';
import Footerbar from '@/components/FooterBar';

export default {
  components: {
    Navbar, Footerbar
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Merriweather-Regular';
  font-style: normal;
  font-weight: 400;
  src: url('@/assets/fonts/Merriweather-Regular.ttf');
  src: local(''),
       url('@/assets/fonts/Merriweather-Regular.ttf') format('truetype'),
}

@font-face {
  font-family: 'Merriweather-Bold';
  src: url('@/assets/fonts/Merriweather-Bold.ttf');
  src: local(''),
       url('@/assets/fonts/Merriweather-Bold.ttf') format('truetype'),
}

@font-face {
  font-family: 'Merriweather-Light';
  font-style: normal;
  font-weight: 300;
  src: url('@/assets/fonts/Merriweather-Light.ttf');
  src: local(''),
       url('@/assets/fonts/Merriweather-Light.ttf') format('truetype'),
}

* {
  box-sizing: border-box;
  padding:0;
  margin:0;
  font-size: 10px;
  font-family: 'Merriweather-Regular';
}

h1 {
  font-family: 'Merriweather-Bold';
  font-weight: 700;
  font-size: 2.4em;
  line-height: 3.6rem;
}

h2 {
  font-family: 'Merriweather-Regular';
  font-weight: 400;
  font-size: 1.8em;
  line-height: 2.7rem;
}

h3 {
  font-family: 'Merriweather-Bold';
  font-weight: 700;
  font-size: 1.6em;
  line-height: 2.4rem;
}

h4 {
  font-family: 'Merriweather-Bold';
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2.1rem;
}

h5 {
  font-family: 'Merriweather-Regular';
  font-weight: 400;
  font-size: 1.4em;
  line-height: 2.1rem;
}

h6 {
  font-family: 'Merriweather-Light';
  font-weight: 300;
  font-size: 1.4em;
  line-height: 2.1rem;
}

.container {
  width: 1216px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  h1 {
    margin-top: 4.5rem;
  }
}

.logo {
  cursor: pointer;
}

.app {
  border-top: 1px solid #E1E1E1;
}
</style>