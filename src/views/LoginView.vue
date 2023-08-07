<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-xs">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="mb-4 text-xl font-bold">Login</h2>
        <!-- Login Form -->
        <form @submit.prevent="loginUser">
          <!-- Username input -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="loginUsername"
              >Username</label
            >
            <input
              v-model="loginData.username"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="loginUsername"
              type="text"
              placeholder="Username"
            />
          </div>
          <!-- Password input -->
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="loginPassword"
              >Password</label
            >
            <input
              v-model="loginData.password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="loginPassword"
              type="password"
              placeholder="******************"
            />
            <p v-if="showError" class="text-red-500 text-xs italic">
              Invalid username or password.
            </p>
          </div>
          <!-- Submit button -->
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginData = reactive({
  username: '',
  password: '',
})
const showError = ref(false)

const loginUser = async () => {
  try {
    const response = await axios.get('http://localhost:8000/users', {
      params: {
        username: loginData.username,
        password: loginData.password,
      },
    })

    if (response.data.length > 0) {
      // User found, perform authentication
      console.log('Login successful:', response.data[0])
      // Redirect to the home page after successful login
      router.push('/')
    } else {
      console.log('Login failed: User not found')
      showError.value = true
    }
  } catch (error) {
    console.error('Login error:', error)
    // Handle login error, e.g., display an error message
  }
}
</script>
