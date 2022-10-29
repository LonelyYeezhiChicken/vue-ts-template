<script  lang="ts">
const rootEl = document.getElementById("app");
export default {
  name: "thisApp",
  data() {
    return {};
  },
  methods: {
    changDark: function (): void {
      const _self = this;
      if (rootEl !== null) {
        if (rootEl.className.includes("dark")) {
          rootEl.classList.remove("dark");
        } else {
          rootEl.classList.add("dark");
        }
      }
    },
  },
};
</script>

<template>
  <main
    className="dark:bg-gray-800 bg-pink-200 font-mono border-blueGray-100 h-screen"
  >
    <input
      class="dark:text-yellow-100 text-gray-700"
      type="button"
      value="暗黑模式"
      @click="changDark()"
    />
    <router-view class="relative w-full h-full py-40 min-h-screen" />
  </main>
</template>

