<script setup lang="ts">
import {ref} from 'vue'
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import MobileSidebar from "@/components/MobileSidebar.vue";
const isOpen = ref<boolean>(false)
function showNavbar(value : boolean) {
  isOpen.value = value
}
</script>
<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <Sidebar />
    <MobileSidebar :is-navbar="isOpen"/>
    <div class="flex flex-col flex-1">
      <Header @toggle-navbar="showNavbar"/>
      <main class="h-full pb-16 overflow-y-auto">
        <!-- Remove everything INSIDE this div to a really blank page -->
        <div class="container px-6 mx-auto grid">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
