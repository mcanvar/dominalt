<template>
  <section
    class="relative z-40 w-full pt-10 pb-16 lg:pt-5 xl:-mt-24 bg-gradient-to-b from-wave-500 via-wave-600 to-wave-400"
  >
    <div
      class="absolute top-0 left-0 z-10 w-full h-full transform -translate-x-1/2 opacity-10"
    >
      <svg
        class="w-full h-full text-white opacity-25 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 205 205"
      >
        <defs></defs>
        <g fill="#FFF" fill-rule="evenodd">
          <path
            d="M182.63 37c14.521 18.317 22.413 41.087 22.37 64.545C205 158.68 159.1 205 102.486 205c-39.382-.01-75.277-22.79-92.35-58.605C-6.939 110.58-2.172 68.061 22.398 37a105.958 105.958 0 00-9.15 43.352c0 54.239 39.966 98.206 89.265 98.206 49.3 0 89.265-43.973 89.265-98.206A105.958 105.958 0 00182.629 37z"
          ></path>
          <path
            d="M103.11 0A84.144 84.144 0 01150 14.21C117.312-.651 78.806 8.94 56.7 37.45c-22.105 28.51-22.105 68.58 0 97.09 22.106 28.51 60.612 38.101 93.3 23.239-30.384 20.26-70.158 18.753-98.954-3.75-28.797-22.504-40.24-61.021-28.47-95.829C34.346 23.392 66.723.002 103.127.006L103.11 0z"
          ></path>
          <path
            d="M116.479 13c36.655-.004 67.014 28.98 69.375 66.234 2.36 37.253-24.089 69.971-60.44 74.766 29.817-8.654 48.753-38.434 44.308-69.685-4.445-31.25-30.9-54.333-61.904-54.014-31.003.32-56.995 23.944-60.818 55.28v-1.777C46.99 44.714 78.096 13.016 116.479 13z"
          ></path>
        </g>
      </svg>
    </div>

    <div
      id="dominalt"
      class="relative z-20 flex flex-col items-start justify-start px-8 mx-auto sm:items-center max-w-7xl xl:px-5"
    >
      <h2 class="text-4xl font-medium leading-9 text-white">
        The Magic of Dominalt
      </h2>
      <p class="mt-4 leading-6 sm:text-center text-wave-200">
        Dominalt has some cool tables to help you build your strategy.<br
          class="hidden md:block"
        />
        Here are a few awesome tables you're going to love!
      </p>

      <div
        class="grid mt-16 gap-y-5 grid-cols-1 gap-x-2 lg:gap-x-4 lg:grid-cols-2"
      >
        <div class="w-full px-0 mb-6 lg:px-3 lg:mb-0">
          <div
            class="relative flex flex-col h-full mb-10 bg-white border border-gray-200 rounded-lg shadow-xl border-b-none sm:mb-0"
          >
            <div class="px-10 pt-7">
              <div class="absolute right-0 inline-block mr-6 transform">
                <h2
                  class="relative z-20 w-full h-full px-2 py-1 text-xs font-bold leading-tight tracking-wide text-center uppercase bg-white border-2 border-gray-900 text-gray-800 rounded"
                >
                  Top 100
                </h2>
              </div>
            </div>

            <div class="px-10 mt-5">
              <span class="font-mono text-5xl font-bold">Theory</span>
              <span class="text-lg font-bold text-gray-500">in 7 days</span>
            </div>

            <div
              class="grid grid-cols-3 gap-x-1 place-items-center px-10 mt-6 pb-9 text-sm text-white font-semibold"
            >
              <div class="rounded-t-lg bg-gray-100 p-1 w-full text-center">
                <h3 class="text-gray-900">BTC.D</h3>
              </div>
              <div class="rounded-t-lg bg-gray-200 p-1 w-full text-center">
                <h3 class="text-gray-900">BTC</h3>
              </div>
              <div class="rounded-t-lg bg-gray-300 p-1 w-full text-center">
                <h3 class="text-gray-900">ALTs</h3>
              </div>

              <div
                v-for="(rule, i) in rules"
                :key="i"
                class="grid grid-cols-3 col-span-3 w-full gap-x-1"
              >
                <div
                  :class="{ 'rounded-b-lg': i === 5 }"
                  class="bg-gray-100 p-1 w-full text-center"
                >
                  <ButtonStatus
                    :active="isInCurrent(i)"
                    :name="rule.dominance"
                  />
                </div>
                <div
                  :class="{ 'rounded-b-lg': i === 5 }"
                  class="bg-gray-200 p-1 w-full text-center"
                >
                  <ButtonStatus
                    :active="isInCurrent(i)"
                    :name="rule.BTCPrice"
                  />
                </div>
                <div
                  :class="{ 'rounded-b-lg': i === 5 }"
                  class="bg-gray-300 p-1 w-full text-center"
                >
                  <ButtonStatus
                    :active="isInCurrent(i)"
                    :name="rule.ALTsPrice"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-0 mb-6 lg:px-3 lg:mb-0">
          <div
            class="relative flex flex-col h-full mb-10 bg-white border border-gray-200 rounded-lg shadow-xl border-b-none sm:mb-0"
          >
            <div class="px-10 pt-7">
              <div class="absolute right-0 inline-block mr-6 transform">
                <h2
                  class="relative z-20 w-full h-full px-2 py-1 text-xs font-bold leading-tight tracking-wide text-center uppercase bg-white border-2 border-gray-900 text-gray-800 rounded"
                >
                  Top 100
                </h2>
              </div>
            </div>

            <div class="px-10 mt-5">
              <span class="font-mono text-5xl font-bold">Actual</span>
              <span class="text-lg font-bold text-gray-500">in 7 days</span>
            </div>

            <div
              class="grid grid-cols-3 gap-x-1 place-items-center px-10 mt-6 pb-9 text-sm text-white font-semibold"
            >
              <div class="rounded-t-lg bg-gray-100 p-1 w-full text-center">
                <h3 class="text-gray-900">BTC.D</h3>
              </div>
              <div class="rounded-t-lg bg-gray-200 p-1 w-full text-center">
                <h3 class="text-gray-900">BTC</h3>
              </div>
              <div class="rounded-t-lg bg-gray-300 p-1 w-full text-center">
                <h3 class="text-gray-900">ALTs</h3>
              </div>

              <div
                v-for="(rule, i) in rules"
                :key="i"
                class="grid grid-cols-3 col-span-3 w-full gap-x-1"
              >
                <div
                  :class="{ 'rounded-b-lg': i === 5 }"
                  class="bg-gray-100 p-1 w-full text-center"
                >
                  <ButtonStatus
                    :decreasing="isInCurrent(i) && !isBTCDominanceIncreased"
                    :increasing="isInCurrent(i) && isBTCDominanceIncreased"
                    :name="
                      isInCurrent(i)
                        ? `${currentBTCDominance.toFixed(
                            2
                          )} (${BTCDominanceChangeInPercent.toFixed(2)}%)`
                        : rule.dominance
                    "
                  />
                </div>
                <div
                  :class="{ 'rounded-b-lg': i === 5 }"
                  class="bg-gray-200 p-1 w-full text-center"
                >
                  <ButtonStatus
                    :decreasing="isInCurrent(i) && !isBTCPriceIncreased"
                    :increasing="isInCurrent(i) && isBTCPriceIncreased"
                    :name="
                      isInCurrent(i)
                        ? `${currentBTCPrice.toFixed(
                            0
                          )}$ (${BTCPriceChangeInPercent.toFixed(2)}%)`
                        : rule.BTCPrice
                    "
                  />
                </div>
                <div
                  :class="{ 'rounded-b-lg': i === 5 }"
                  class="bg-gray-300 p-1 w-full text-center"
                >
                  <ButtonStatus
                    :decreasing="isInCurrent(i) && !isALTsPricesIncreased"
                    :increasing="isInCurrent(i) && isALTsPricesIncreased"
                    :name="rule.ALTsPrice"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      currentBTCDominance: 0,
      currentBTCPrice: 0,
      BTCDominanceChangeInPercent: 0,
      BTCPriceChangeInPercent: 0,
      ALTsPriceChangeInPercent: 0,
      rules: [
        {
          dominance: 'Increases',
          BTCPrice: 'Increases',
          ALTsPrice: 'Decreases'
        },
        {
          dominance: 'Increases',
          BTCPrice: 'Decreases',
          ALTsPrice: 'Dec. Rapidly'
        },
        {
          dominance: 'Increases',
          BTCPrice: 'Stable',
          ALTsPrice: 'Stable'
        },
        {
          dominance: 'Decreases',
          BTCPrice: 'Increases',
          ALTsPrice: 'Inc. Rapidly'
        },
        {
          dominance: 'Decreases',
          BTCPrice: 'Decreases',
          ALTsPrice: 'Dec. or Stable'
        },
        {
          dominance: 'Decreases',
          BTCPrice: 'Stable',
          ALTsPrice: 'Increases'
        }
      ]
    }
  },
  computed: {
    currentRule() {
      return {
        dominance: this.isBTCDominanceIncreased ? 'Increases' : 'Decreases',
        BTCPrice: this.isBTCPriceIncreased
          ? 'Increases'
          : this.isBTCPriceStable
          ? 'Stable'
          : 'Decreases',
        ALTsPrice: this.ALTsPriceText
      }
    },
    currentRuleIndex() {
      return this.rules.findIndex((rule) => {
        return (
          rule.ALTsPrice === this.currentRule.ALTsPrice &&
          rule.BTCPrice === this.currentRule.BTCPrice &&
          rule.dominance === this.currentRule.dominance
        )
      })
    },
    isBTCDominanceIncreased() {
      return this.BTCDominanceChangeInPercent > 0
    },
    isBTCPriceIncreased() {
      return this.BTCPriceChangeInPercent > 1
    },
    isALTsPricesIncreased() {
      return this.ALTsPriceChangeInPercent > 0
    },
    isBTCPriceStable() {
      return (
        this.BTCPriceChangeInPercent >= -1 && this.BTCPriceChangeInPercent <= 1
      )
    },
    absoluteALTsPriceChangeInPercent() {
      return Math.abs(this.ALTsPriceChangeInPercent)
    },
    ALTsPriceText() {
      if (
        this.ALTsPriceChangeInPercent > 1 &&
        this.absoluteALTsPriceChangeInPercent > 5
      )
        return 'Inc. Rapidly'

      if (this.ALTsPriceChangeInPercent > 1) return 'Increases'

      if (
        this.ALTsPriceChangeInPercent >= -1 &&
        this.ALTsPriceChangeInPercent <= 1
      )
        return 'Stable'

      if (this.ALTsPriceChangeInPercent < -1) return 'Decreases'

      return 'Dec. Rapidly'
    }
  },
  async mounted() {
    const today = new Date()
    const theWeekBefore = new Date(today - 1000 * 60 * 60 * 24 * 7)

    const { data: coins } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d'
    )

    const {
      data: {
        data: { values: dominanceOfBTCOfOneWeek }
      }
    } = await axios.get(
      `https://data.messari.io/api/v1/assets/bitcoin/metrics/mcap.dom/time-series?after=${theWeekBefore
        .toISOString()
        .substr(0, 10)}&interval=1d`
    )

    let priceChangeInPercentOfALTsTotal = 0
    for (const coin of coins) {
      if (coin.id === 'bitcoin') continue

      priceChangeInPercentOfALTsTotal +=
        coin.price_change_percentage_7d_in_currency
    }

    this.currentBTCDominance =
      dominanceOfBTCOfOneWeek[dominanceOfBTCOfOneWeek.length - 1][1]
    this.currentBTCPrice = coins[0].current_price
    this.BTCDominanceChangeInPercent =
      ((this.currentBTCDominance - dominanceOfBTCOfOneWeek[0][1]) /
        dominanceOfBTCOfOneWeek[0][1]) *
      100
    this.BTCPriceChangeInPercent =
      coins[0].price_change_percentage_7d_in_currency
    this.ALTsPriceChangeInPercent = priceChangeInPercentOfALTsTotal / 99
  },
  methods: {
    isInCurrent(ruleIndex) {
      return this.currentRuleIndex === ruleIndex
    }
  }
}
</script>

<style scoped></style>
