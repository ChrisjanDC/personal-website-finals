<template>
  <div id="app">
    <h1>Welcome to My Personal Website</h1>
    <AboutSection />
    <Guestbook />
  </div>
</template>

<script>
import AboutSection from './components/AboutSection.vue'
import Guestbook from './components/Guestbook.vue'

export default {
  name: 'App',
  components: {
    AboutSection,
    Guestbook
  }
}
</script>

<style>
body {
  background-color: white;
  color: black;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

h1 {
  text-align: center;
  margin-top: 0px;
  font-size: 2.5em;
  color: #000000ff;
}
</style>
