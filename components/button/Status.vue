<template>
  <div
    :class="activeClasses"
    class="inline-flex text-xs items-center justify-center w-full p-2 transition duration-150 cursor-default bg-gradient-to-r from-gray-500 to-gray-700 ease-in-out border border-transparent rounded-md checkout focus:outline-none disabled:opacity-25"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
    increasing: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
    decreasing: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
    name: {
      type: String,
      required: true,
    } as PropOptions<string>,
  },
  computed: {
    activeClasses() {
      return {
        'bg-gradient-to-r': this.active,
        'animate-pulse': this.active && !this.increasing && !this.decreasing,
        'from-wave-600': this.active && !this.increasing && !this.decreasing,
        'to-indigo-500': this.active && !this.increasing && !this.decreasing,
        'hover:from-wave-500':
          this.active && !this.increasing && !this.decreasing,
        'hover:to-indigo-400':
          this.active && !this.increasing && !this.decreasing,
        'from-teal-400': this.increasing,
        'to-teal-600': this.increasing,
        'hover:from-teal-300': this.increasing,
        'hover:to-teal-500': this.increasing,
        'from-rose-400': this.decreasing,
        'to-rose-600': this.decreasing,
        'hover:from-rose-300': this.decreasing,
        'hover:to-rose-500': this.decreasing,
      }
    },
  },
})
</script>

<style scoped></style>
