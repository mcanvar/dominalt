<template>
  <nav
    class="flex items-center justify-end flex-1 hidden w-full h-full space-x-10 md:flex"
  >
    <NuxtLink
      to="/"
      class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-wave-600 focus:outline-none focus:text-wave-600"
    >
      Homepage
    </NuxtLink>

    <NuxtLink
      to="/coin-comparison"
      tag="button"
      disabled
      class="cursor-not-allowed text-base font-medium leading-6 text-gray-400 transition duration-150 ease-in-out hover:text-wave-600 focus:outline-none focus:text-wave-600"
    >
      Coin Comparision
    </NuxtLink>

    <NuxtLink
      to="/#pricing"
      tag="button"
      disabled
      class="cursor-not-allowed text-base font-medium leading-6 text-gray-400 transition duration-150 ease-in-out hover:text-wave-600 focus:outline-none focus:text-wave-600"
    >
      Coins of the Day
    </NuxtLink>

    <NuxtLink
      to="https://wave.devdojo.com/blog"
      tag="button"
      disabled
      class="cursor-not-allowed text-base font-medium leading-6 text-gray-400 transition duration-150 ease-in-out hover:text-wave-600 focus:outline-none focus:text-wave-600"
    >
      Contact
    </NuxtLink>

    <div class="w-1 h-5 mx-10 border-r border-gray-300"></div>
    <NuxtLink
      to="https://wave.devdojo.com/login"
      tag="button"
      disabled
      class="cursor-not-allowed text-base font-medium leading-6 text-gray-400 whitespace-no-wrap hover:text-wave-600 focus:outline-none focus:text-gray-900"
    >
      Sign in
    </NuxtLink>
    <span class="inline-flex rounded-md shadow-sm">
      <NuxtLink
        to="https://wave.devdojo.com/register"
        tag="button"
        disabled
        class="cursor-not-allowed inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-wave-400 hover:bg-wave-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-wave active:bg-wave-700"
      >
        Sign up
      </NuxtLink>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped></style>
