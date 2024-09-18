<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body>
    <form>
      <div class="flex justify-center items-center min-h-screen">
        <div class="w-full max-w-md p-6 shadow-lg bg-white rounded-md">
          <h1 class="text-3xl block text-center font-semibold">Login</h1>
          <hr class="mt-3">
          <div class="mt-3">
            <label class="block text-base mb-2">Username or Email</label>
            <input class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" type="text" placeholder="Username or Email" v-model="usernameOrEmail"/>
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2">Password</label>
            <input class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" type="password" placeholder="Password" v-model="password"/>
          </div>
          <div class="mt-3 flex justify-between items-center">
            <div class="flex items-center">
              <input type="checkbox" v-model="rememberMe" class="mr-2">
              <label>Remember me</label>
            </div>
          </div>
          <div class="mt-5">
            <button type="submit" @click.prevent="login" class="border-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded w-full">Login</button>
          </div>
        </div>
      </div>
    </form>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginComponent',
  data() {
    return {
      usernameOrEmail: '',  // Can be username or email
      password: '',
      rememberMe: false
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
          usernameOrEmail: this.usernameOrEmail, // Send the input
          password: this.password,
          remember: this.rememberMe
        });

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/home'); // Redirect to home page
        } else {
          alert('Login failed: ' + response.data.message);
        }
      } catch (error) {
        if (error.response) {
          alert('Login failed: ' + error.response.data.message);
        } else if (error.request) {
          alert('No response from the server: ' + error.message);
        } else {
          alert('An error occurred: ' + error.message);
        }
      }
    }
  }
}
</script>

<style>
/* Responsive styles */
@media (max-width: 640px) {
  .w-full {
    padding: 1rem;
  }
}
</style>
