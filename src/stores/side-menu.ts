import { ref } from "vue";
import { defineStore } from "pinia";

export const useSideMenu = defineStore("sideMenu", () => {
  const menus = ref([{
    link : '/about',
    menu_name : "Tentang",
},
{
    link : '/about',
    menu_name : "Tentang",
    isDropdown:true,
    sub_menu :[
       { link : '/about',
    menu_name : "Tentang",}
    ]
},]);

  return { menus };
});
