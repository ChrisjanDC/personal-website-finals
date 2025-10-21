<template>
  <div class="guestbook">
    <h2>Guestbook</h2>
    <form @submit.prevent="addMessage">
      <input v-model="name" placeholder="Your name" required />
      <input v-model="email" type="email" placeholder="Your email" required />
      <textarea v-model="message" placeholder="Your message"></textarea>
      <button type="submit">Sign Guestbook</button>
    </form>

    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <strong>{{ entry.name }}</strong>: {{ entry.message }}
        <br />
        <small>{{ new Date(entry.inserted_at).toLocaleString() }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// ✅ Corrected import path for Supabase client
import { supabase } from '../supabase/supabaseClient.js'

const name = ref('')
const email = ref('')
const message = ref('')
const entries = ref([])

// Load messages when component mounts
onMounted(async () => {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('inserted_at', { ascending: false })

  if (!error) {
    entries.value = data || []
  } else {
    console.error('Error loading guestbook:', error)
  }
})

// Add message to guestbook
async function addMessage() {
  if (!name.value || !email.value || !message.value) return

  const { data, error } = await supabase
    .from('guestbook')
    .insert([{ name: name.value, email: email.value, message: message.value }])
    .select()

  if (!error && data) {
    entries.value.unshift(data[0])
    name.value = ''
    email.value = ''
    message.value = ''
  } else {
    console.error('Error adding message:', error)
  }
}
</script>

<style scoped>
.guestbook {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #1f2937; /* Dark gray card */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.guestbook h2 {
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

input,
textarea {
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #374151;
  color: #e5e7eb;
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #2563eb;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

li {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  color: #d1d5db;
  text-align: left;
}

strong {
  color: #3b82f6;
}

/* ✅ Responsive Design */
@media (max-width: 600px) {
  .guestbook {
    padding: 1.2rem;
    margin: 1rem;
  }

  input,
  textarea,
  button {
    font-size: 0.9rem;
  }
}
</style>

<style>
body {
  background-color: white;
  color: black;
}
</style>
