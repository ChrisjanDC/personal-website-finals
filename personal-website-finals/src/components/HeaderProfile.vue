<template>
  <header class="navbar">
    <nav class="nav-container">
      <div class="logo">Chrisjan James</div>
      <ul class="nav-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#guestbook">Guestbook</a></li>
        <li><a href="#hobbies">Hobbies & Interests</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderProfile",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #eb4141ff;
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 0.5px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #000000ff;
}
</style>
