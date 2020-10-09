<template>
  <div class="tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500">
    <h1 class="text-teal-500 text-3xl text-blue-700">Hello Counter</h1>
    <p>Count: {{ counter }}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="increased()">Increment</button>
    <div class="p-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#photography</span>
          <span class="badge mr-2">#travel</span>
          <span class="badge">#winter</span>
        </div>
      </div>
      <NuxtLink to="/about">
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increased() {
      this.counter++;
    },
  },
};
</script>