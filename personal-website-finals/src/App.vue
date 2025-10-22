<template>
  <div id="app">
    <HeaderProfile />
    <main>
      

      <section id="about" class="page-section">
        <AboutSection />
      </section>

      <section id="education" class="page-section">
        <EducationSection />
      </section>

      <section id="hobbies" class="page-section">
        <HobbiesInterest />
      </section>

      <section id="guestbook" class="page-section">
        <Guestbook />
      </section>
    </main>

    <footer id="contact" class="footer-section">
  <FooterSection />
</footer>
  </div>
</template>

<script>
import HeaderProfile from './components/HeaderProfile.vue'
import AboutSection from './components/AboutSection.vue'
import EducationSection from './components/EducationSection.vue'
import HobbiesInterest from './components/HobbiesInterest.vue'
import Guestbook from './components/Guestbook.vue'
import FooterSection from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderProfile,
    AboutSection,
    EducationSection,
    HobbiesInterest,
    Guestbook,
    FooterSection
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: white;
  color: black;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

/* ensures footer stays at bottom */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

h1 {
  text-align: center;
  margin-top: 0;
  font-size: 2.5em;
  color: #000000ff;
}

/* Centers the section better and offsets for the fixed header */
.page-section {
  scroll-margin-top: 100px;
  margin: 120px auto;
  padding: 60px 20px;
  max-width: 1000px;
}

.page-section:not(:last-child) {
  border-bottom: 2px solid #ddd;
}
</style>

