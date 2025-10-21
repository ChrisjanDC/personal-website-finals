<script setup>
import profileImage from '../assets/profile.jpg'
</script>

<template>
  <section class="about">
    <img :src="profileImage" alt="Profile photo" class="profile-pic" />
    <div class="about-text">
      <h2>About Me</h2>
      <p>
        Hi! I’m <strong>Chrisjan</strong> — you can call me CJ. I'm a 3rd Year High Shool in Asia Pacific College
      </p>
    </div>
  </section>
</template>

<style>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.profile-pic {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
