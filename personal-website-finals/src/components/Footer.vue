<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        📧
        <a href="mailto:Chris17dc@gmail.com">Chris17dc@gmail.com</a> |
        <a href="mailto:cedelacruz@student.apc.edu.ph">cedelacruz@student.apc.edu.ph</a>
      </p>
      <p>
        🌐
        <a href="https://github.com/ChrisjanDC" target="_blank" rel="noopener">GitHub</a> |
        <a href="https://www.facebook.com/cjaiy3/" target="_blank" rel="noopener">Facebook</a>
      </p>
      <p>© 2025 Chrisjan James Dela Cruz</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #e2e2e2ff;
  padding: 30px 20px;
  text-align: center;
  border-top: 2px solid #fff;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0);

  /* Full width and flush bottom */
  width: 100%;
  position: relative; /* Change to 'fixed' if you want it always visible */
  left: 0;
  bottom: 0;
  margin: 0;
  border-radius: 0; /* removes curved corners */
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
}

.footer a {
  color: #007bff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer p {
  margin: 8px 0;
  color: #333;
}
</style>
