<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-xs">
      <div
        v-if="!registered"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 class="mb-4 text-xl font-bold">Registration</h2>
        <!-- Registration Form -->
        <form @submit.prevent="registerUser">
          <!-- Username input -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="registerUsername"
              >Username</label
            >
            <input
              v-model="registerData.username"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="registerUsername"
              type="text"
              placeholder="Username"
            />
          </div>
          <!-- Password input -->
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="registerPassword"
              >Password</label
            >
            <input
              v-model="registerData.password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="registerPassword"
              type="password"
              placeholder="******************"
            />
          </div>
          <!-- Submit button -->
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
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
const registerData = reactive({
  username: '',
  password: '',
})
const registered = ref(false)

const registerUser = async () => {
  try {
    const response = await axios.post('http://localhost:8000/users', {
      username: registerData.username,
      password: registerData.password,
    })
    console.log('Registration successful:', response.data)
    registered.value = true
    // Redirect to login page after successful registration
    router.push('/login')
  } catch (error) {
    console.error('Registration error:', error)
    // Handle registration error, e.g., display an error message
  }
}
</script>
