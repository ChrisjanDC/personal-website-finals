<template>
  <footer class="site-footer" aria-label="Contact section">
    <div class="footer-inner">
      <h2 class="footer-title">Contact</h2>
      <p class="footer-text">
        <a class="link" href="mailto:Chris17dc@gmail.com">Chris17dc@gmail.com</a>
        <span aria-hidden="true"> · </span>
        <a class="link" href="mailto:cdelacruz@student.apc.edu.ph">cdelacruz@student.apc.edu.ph</a>
      </p>
      <p class="footer-links">
        <a class="link" href="#" rel="me noopener" target="_blank">GitHub</a>
        <span aria-hidden="true"> · </span>
        <a class="link" href="#" rel="me noopener" target="_blank">Facebook</a>
      </p>
      <small class="copyright">© 2025 Chrisjan James Dela Cruz</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.site-footer {
  border-top: 1px solid #e5e7eb; /* neutral-200 */
  margin-top: 4rem;
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  text-align: center;
}

.footer-title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a; /* slate-900 */
}

.footer-text,
.footer-links {
  margin: 0.25rem 0;
  color: #334155; /* slate-700 */
}

.link {
  color: #2563eb; /* minimalist blue */
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}

.copyright {
  display: block;
  margin-top: 1rem;
  color: #64748b; /* slate-500 */
}

@media (max-width: 640px) {
  .footer-inner {
    padding: 1.5rem 1rem 2.5rem;
  }
}
</style>
