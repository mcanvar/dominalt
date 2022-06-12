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
      class="relative z-20 flex flex-col items-start justify-start px-8 mx-auto sm:items-center max-w-7xl xl:px-5"
    >
      <h2 class="text-4xl font-medium leading-9 text-white">
        Awesome Features
      </h2>
      <p class="mt-4 leading-6 sm:text-center text-wave-200">
        Dominalt has some cool features to help you rapidly build your Software
        as a Service.<br class="hidden md:block" />
        Here are a few awesome features you're going to love!
      </p>

      <div
        class="grid mt-16 gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12 lg:grid-cols-3 xl:grid-cols-4 lg:gap-20"
      >
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/authentication.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Authentication
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Fully loaded authentication, email verification, and password reset.
            Authentication in a snap!
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/profile.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            User Profiles
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Customizable user profiles. Allow your users to enter data and
            easily customize their user profiles.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/impersonation.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            User Impersonation
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            With user impersonations you can login as another user and resolve
            an issue or troubleshoot a bug.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/subscriptions.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Subscriptions
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Allow users to pay for your service and signup for a subscription
            using Stripe or Braintree Payments.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/plans.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Subscription Plans
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Create new plans with different features and intrigue your users to
            subscribe to any plan.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/roles.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            User Roles
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Grant user permissions based on roles, you can then assign a role to
            a specific plan.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/notifications.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Notifications
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Ready-to-use Notification System which integrates with the default
            Laravel notification feature.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/announcements.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Announcements
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Create user announcements to notify users about new features or
            updates in your application.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/blog.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Blog
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Equipped with a fully-functional blog. Write posts related to your
            product to gain free SEO traffic.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/api.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Fully Functional API
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Ready-to-consume API for your application. Create API tokens with
            role specific permissions.
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/admin.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Voyager Admin
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Dominalt has been crafted using Laravel &amp; Voyager, which makes
            administering your app a breeze!
          </p>
        </div>
        <div>
          <img
            src="https://wave.devdojo.com/themes/tailwind/images/themes.png"
            class="w-16 rounded sm:mx-auto"
          />
          <h3
            class="mt-6 text-sm font-semibold leading-6 sm:text-center text-wave-100"
          >
            Themes
          </h3>
          <p class="mt-2 text-sm leading-5 sm:text-center text-wave-200">
            Fully configurable themes. Choose from a few starter themes to begin
            configuring to make it your own.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped></style>
