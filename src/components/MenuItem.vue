<script setup lang="ts">
import { defineProps } from "vue";

export interface PropsMenu {
  link: string;
  menuName: string;
}
const props = defineProps<PropsMenu>();
</script>
<template>
  <router-link
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    :to="props.link"
  >
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
      ></path>
    </svg>
    <span class="ml-4">{{ props.menuName }}</span>
  </router-link>
</template>
