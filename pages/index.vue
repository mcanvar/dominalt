<template>
  <div>
    <div hidden class="relative flex items-center w-full">
      <div class="relative z-20 px-8 mx-auto xl:px-5 max-w-7xl">
        <div class="flex flex-col items-center h-full pt-16 pb-56 lg:flex-row">
          <div
            class="flex flex-col items-start w-full mb-16 md:items-center lg:pr-12 lg:items-start lg:w-1/2 lg:mb-0"
          >
            <h2
              class="text-sm font-semibold tracking-wide text-gray-700 uppercase duration-700 ease-out transform sm:text-base lg:text-sm xl:text-base transition-all visible translate-y-0 scale-100 opacity-100"
              data-replace='{ "transition-none": "transition-all", "invisible": "visible", "translate-y-12": "translate-y-0", "scale-110": "scale-100", "opacity-0": "opacity-100" }'
            >
              Welcome to Dominalt
            </h2>
            <h1
              class="pb-2 mt-3 text-4xl font-extrabold leading-10 tracking-tight text-transparent duration-700 ease-out delay-150 transform bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 scale-10 md:my-5 sm:leading-none lg:text-5xl xl:text-6xl transition-all visible translate-y-0 scale-100 opacity-100"
              data-replace='{ "transition-none": "transition-all", "invisible": "visible", "translate-y-12": "translate-y-0", "scale-110": "scale-100", "opacity-0": "opacity-100" }'
            >
              Start building your next investment idea.
            </h1>
            <p
              class="max-w-2xl mt-0 text-base text-left text-gray-600 duration-700 ease-out delay-300 transform md:text-center lg:text-left sm:mt-2 md:mt-0 sm:text-base lg:text-lg xl:text-xl transition-all visible translate-y-0 scale-100 opacity-100"
              data-replace='{ "transition-none": "transition-all", "invisible": "visible", "translate-y-12": "translate-y-0", "scale-110": "scale-100", "opacity-0": "opacity-100" }'
            >
              Dominalt will help you rapidly build the strategy of your next
              investment. Out of the box screens, calculators, announcements,
              and so much more!
            </p>
            <div
              class="w-full mt-5 duration-700 ease-out transform delay-450 sm:mt-8 sm:flex sm:justify-center lg:justify-start sm:w-auto transition-all visible translate-y-0 opacity-100"
              data-replace='{ "transition-none": "transition-all", "invisible": "visible", "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
            >
              <div class="rounded-md">
                <NuxtLink
                  to="/register"
                  tag="button"
                  disabled
                  class="cursor-not-allowed flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-wave-500 hover:bg-wave-600 focus:outline-none focus:border-wave-600 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
                >
                  Signup
                </NuxtLink>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <NuxtLink
                  to="#dominalt"
                  tag="button"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border-2 border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 md:py-4 md:text-lg md:px-10"
                >
                  Dive in
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="flex w-full mb-16 lg:w-1/2 lg:mb-0">
            <div
              class="relative duration-1000 delay-100 transform transition-all visible translate-y-0 opacity-100"
              data-replace='{ "transition-none": "transition-all", "invisible": "visible", "translate-x-12": "translate-y-0", "opacity-0": "opacity-100" }'
            >
              <img
                src="https://img.freepik.com/free-vector/flat-illustration-stock-trader-working-computer-with-graphs-man-investor-using-pc-analyzing-charts-diagrams-exchange-market-finances-cryptocurrency-investing_74855-20567.jpg?t=st=1655040962~exp=1655041562~hmac=9c1c41c69e03287ba0c01ed33c755a977313e14355c42fccb046781856bb72b3&w=600"
                class="w-full max-w-3xl sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Seperator />

    <SectionTable />

    <SeperatorStable />

    <SectionTestimonials />

    <SectionPricing />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
