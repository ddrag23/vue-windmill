<script setup lang="ts">
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
import { useSideMenu } from "@/stores/side-menu";

const { menus } = useSideMenu();
const isPagesMenuOpen = ref(false);
const sameMenu = ref<number>();
function togglePagesMenu(index: number): void {
  sameMenu.value = index;
  isPagesMenuOpen.value = !isPagesMenuOpen.value;
}
</script>
<template>
  <aside
    class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
  >
    <div class="py-4 text-gray-500 dark:text-gray-400">
      <a
        class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
      >
        Vue Windmill
      </a>
      <ul class="mt-6">
        <li class="relative px-6 py-3">
          <!-- Add this classes to an active anchor (a tag) -->
          <!-- text-gray-800 dark:text-gray-100 -->
          <MenuItem
            link="dashboard"
            menuName="Dashboard"
            icon="fa-solid fa-gauge"
          />
        </li>
      </ul>
      <ul>
        <template v-for="(menu, index) in menus">
          <li
            class="relative px-6 py-3"
            v-if="!menu.hasOwnProperty('isDropdown')"
          >
            <MenuItem
              :link="menu.link"
              :menuName="menu.menu_name"
              :icon="menu.icon"
            />
          </li>
          <li class="relative px-6 py-3" v-else>
            <button
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              @click="togglePagesMenu(index)"
              aria-haspopup="true"
            >
              <span class="inline-flex items-center">
                <font-awesome-icon icon="fa-solid fa-users" />

                <span class="ml-4">{{ menu.menu_name }}</span>
              </span>
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <Transition>
              <template v-if="sameMenu == index">
                <ul
                  class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                  aria-label="submenu"
                >
                  <li
                    class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    v-for="subMenu in menu.sub_menu"
                  >
                    <router-link class="w-full" :to="subMenu.link">{{
                      subMenu.menu_name
                    }}</router-link>
                  </li>
                </ul>
              </template>
            </Transition>
          </li>
        </template>
      </ul>
      <div class="px-6 my-6">
        <button
          class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Create account
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
