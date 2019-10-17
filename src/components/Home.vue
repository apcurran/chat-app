<template>
  <div class="home">
    <figure class="home-hero">
      <img class="home-hero-img" src="../assets/chat-welcome.svg" alt="Man">
    </figure>
    <section class="home-login">
      <form @submit.prevent="enterChat" class="home-login-form">
        <div class="home-login-form-field">
          <label for="username" class="home-login-form-field-label">Sign in to continue</label>
          <input v-model="username" type="text" id="username" name="username" class="home-login-form-field-input" placeholder="Your username">
          <p v-if="feedback" class="home-login-feedback feedback">{{ feedback }}</p>
        </div>
        <input type="submit" class="home-login-submit" value="Enter Chatroom">
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      username: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if (this.username) {
        this.$router.push({ name: "Chatroom", params: { username: this.username } })
        this.feedback = null;
      } else {
        this.feedback = "Please enter a username to join.";
      }
    }
  }
}
</script>

<style>

.home {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  min-height: 100vh;
}

.home-hero {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-hero-img {
  width: 100%;
  object-fit: cover;
  align-self: center;
}

.home-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--light-grey-blue);
}

.home-login-form {
  width: 60%;

  display: flex;
  flex-direction: column;
}

.home-login-form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.home-login-form-field-label {
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1.1rem;
}

.home-login-form-field-input {
  font-size: 1.025rem;
  padding: .65rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
}

.home-login-form-field-input::placeholder {
  color: #bbb;
}

.home-login-submit {
  padding: .75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: var(--dark-grey-blue);
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: .06em;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

.home-login-submit:hover {
  background-color: hsl(218, 17%, 23%);
}

.home-login-feedback,
.feedback {
  margin-top: .75rem;
  color: hsl(0, 61%, 45%);
  font-weight: 500;
}



</style>
