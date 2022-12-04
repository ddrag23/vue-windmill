<script setup lang="ts">
import { defineProps, type ComponentInternalInstance } from "vue";

export interface PropsMenu {
  link: string;
  menuName: string;
  icon: string;
}
const props = defineProps<PropsMenu>();
</script>
<template>
  <span
    class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
    aria-hidden="true"
    v-if="$route.name == props.link"
  ></span>
  <router-link
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    :to="{ name: props.link }"
  >
    <font-awesome-icon :icon="props.icon" />
    <span class="ml-4">{{ props.menuName }}</span>
  </router-link>
</template>
