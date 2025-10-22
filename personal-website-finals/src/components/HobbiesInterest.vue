<template>
  <section class="hobbies-interests">
    <h2>Hobbies & Interests</h2>

    <div class="hobby-images">
      <img :src="hobby1" alt="Hobby 1" />
      <img :src="hobby2" alt="Hobby 2" />
    </div>

    <p>
      In my free time, I enjoy exploring creative and technical activities that inspire me.
      Whether it’s coding new projects, designing layouts, playing games, or learning something new,
      I always look for ways to grow and express myself. I also love spending time outdoors,
      taking photos, and connecting with people who share the same passions.
    </p>

    
    <p>
      When I'm not inside the court, I usually play online games with my friends,
      watch some movies, as well as walk my dog at the park.
    </p>
  </section>
</template>

<script setup>
import hobby1 from '../assets/hobby1.jpg'
import hobby2 from '../assets/hobby2.jpg'
</script>

<style scoped>
.hobbies-interests {
  text-align: center;
  padding: 60px 20px;
}

.hobby-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.hobby-images img {
  width: 300px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

p {
  max-width: 800px;
  margin: 0 auto 20px;
  line-height: 1.6;
  color: #333;
}
</style>
