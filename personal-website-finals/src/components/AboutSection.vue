<template>
  <section class="about-me">
    <div class="about-container">
      <img :src="profileImg" alt="Your photo" class="profile-pic" />
      <div class="about-text">
        <h2>About Me</h2>
        <p>
          Hi! I’m <strong>Your Name</strong> — a passionate web developer who loves creating
          interactive and meaningful user experiences. I enjoy learning new technologies and
          turning creative ideas into functional designs.
        </p>
        <p>
          When I’m not coding, you’ll probably find me sketching, exploring new music, or tinkering
          with personal projects.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import profileImg from '../assets/profile.jpg';

export default {
  name: 'AboutSection',
  data() {
    return {
      profileImg
    };
  }
};
</script>

<style scoped>
.about-me {
  background-color: #ffffff;
  color: #111827;
  padding: 4rem 2rem;
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #2563eb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about-text {
  flex: 1;
}

h2 {
  font-size: 2rem;
  color: #1d4ed8;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}
</style>
