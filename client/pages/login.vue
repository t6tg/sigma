<template>
  <div class="container">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          id="username"
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="password"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="handelLoginClicked"
        >
          Sign In
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
  layout: 'session',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handelLoginClicked() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { username: this.username, password: this.password }
        })
        // eslint-disable-next-line no-console
        if (response.data.success) {
          this.$router.replace({ path: 'main' })
        }
        console.log(response)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    }
  }
}
</script>

<style></style>
