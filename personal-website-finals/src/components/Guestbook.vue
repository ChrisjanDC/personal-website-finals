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
  background-color: #ffffffff;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 1);
  text-align: center;
}

.guestbook h2 {
  color: #030303ff;
  font-size: 2.5rem;
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
  background-color: #d0d0d0ff;
  color: #000000ff;
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #ffffffff;
}

button {
  background-color: #9c1a1aff;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #e35656ff;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

li {
  background: #d0d0d0ff;
  border: 1px solid #ffffffff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  color: #434343ff;
  text-align: left;
}

strong {
  color: #a00c0cff;
}


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
