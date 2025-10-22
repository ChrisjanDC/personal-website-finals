<template>
  <section class="guestbook">
    <h2>Guestbook</h2>

    <form @submit.prevent="submitMessage" class="guestbook-form">
      <input v-model="name" type="text" placeholder="Your name" required />
      <input v-model="email" type="email" placeholder="Your email" required />
      <textarea v-model="message" placeholder="Your message" required></textarea>
      <button type="submit">Sign Guestbook</button>
    </form>

    <div v-if="messages.length" class="messages">
      <div v-for="(msg, index) in messages" :key="index" class="message-card">
        <p><strong>{{ msg.name }}:</strong> {{ msg.message }}</p>
        <small>{{ msg.date }}</small>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      messages: JSON.parse(localStorage.getItem("guestbookMessages") || "[]"),
    };
  },
  methods: {
    submitMessage() {
      const newMessage = {
        name: this.name,
        email: this.email,
        message: this.message,
        date: new Date().toLocaleString(),
      };
      this.messages.unshift(newMessage);
      localStorage.setItem("guestbookMessages", JSON.stringify(this.messages));
      this.name = this.email = this.message = "";
    },
  },
};
</script>

<style scoped>
.guestbook {
  background-color: #ffffff;
  border: 2px solid #ffdede;
  border-radius: 40px;
  padding: 60px 50px;
  margin: 100px auto;
  max-width: 90%;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.15);
  text-align: center;
}

.guestbook h2 {
  font-size: 2em;
  color: #000;
  margin-bottom: 25px;
}

.guestbook-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
}

.guestbook-form input,
.guestbook-form textarea {
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #e0e0e0;
  font-size: 1em;
}

.guestbook-form button {
  background-color: #a51515;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.05em;
  transition: background-color 0.3s;
}

.guestbook-form button:hover {
  background-color: #8e1010;
}

.messages {
  margin-top: 40px;
  text-align: left;
  width: 80%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.message-card {
  background-color: #d9d9d9;
  border-radius: 12px;
  padding: 15px 20px;
  margin-top: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.message-card p {
  margin: 0;
}

.message-card strong {
  color: #a51515;
}

.message-card small {
  display: block;
  margin-top: 5px;
  font-size: 0.85em;
  color: #555;
}
</style>
