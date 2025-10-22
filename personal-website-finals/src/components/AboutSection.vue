<script setup>
import profileImage from '../assets/profile.jpg'
</script>

<template>
  <section class="about">
    <img :src="profileImage" alt="Profile photo" class="profile-pic" />
    <div class="about-text">
      <h2>About Me</h2>
      <p>
        Hi! I’m <strong>Chrisjan</strong> but you can call me CJ. I’m a 3rd-year high school student at 
        <strong>Asia Pacific College</strong> who’s passionate about learning new things, especially when it comes 
        to technology and design.
      </p>

      <p>
        I enjoy creating projects that challenge my creativity, whether it’s coding, designing, or exploring how things work. 
        I believe that every experience is a chance to grow, and I’m always eager to improve and pick up new skills that can help me 
        both in school and in life.
      </p>

      <p>
        Outside of academics, I love spending time with friends playing online games, and walk my dogs at the park to relax. 
        I try to balance productivity and fun, always keeping a positive attitude and an open mind toward learning.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.profile-pic {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about-text {
  max-width: 550px;
  text-align: left;
}

.about-text h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #222;
}

.about-text p {
  font-size: 1.05em;
  line-height: 1.7;
  color: #444;
  margin-bottom: 15px;
}
</style>
