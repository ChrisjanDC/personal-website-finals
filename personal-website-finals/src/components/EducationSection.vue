<template>
  <section id="education" class="education-section">
    <h2>Education</h2>

    <div class="education-item">
      <h3>BS in Computer Engineering</h3>
      <p><strong>School:</strong> School of Engineering, Asia Pacific College</p>
      <p><strong>Year:</strong> 2023 – Present</p>
      <p>
        Currently pursuing a Bachelor’s degree in Information and Technology
      </p>
    </div>

    <div class="education-item">
      <h3>Senior High School (HUMSS)</h3>
      <p><strong>School:</strong> Siena College of Taytay</p>
      <p><strong>Year:</strong> 2021 – 2023</p>
      <p>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "EducationSection",
};
</script>

<style scoped>
.education-section {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.education-section h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #222;
}

.education-item {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.education-item h3 {
  color: #333;
  margin-bottom: 5px;
}

.education-item p {
  margin: 4px 0;
  color: #555;
}
</style>
