import { ref } from "vue";
import { defineStore } from "pinia";

export const useSideMenu = defineStore("sideMenu", () => {
  const menus = ref([{
    link : 'about',
    menu_name : "Tentang",
    icon:"fa-solid fa-address-card"
},
{
    link : 'about',
    menu_name : "Tentang",
    icon:"fa-address-card",
    isDropdown:true,
    sub_menu :[
       { link : 'about',
    menu_name : "Tentang",icon:"fa-address-card"}
    ]
},
{
  link : 'about',
  menu_name : "Users",
  icon:"fa-address-card",
  isDropdown:true,
  sub_menu :[
     { link : 'about',
  menu_name : "Akun Users",icon:"fa-address-card"}
  ]
}
]);

  return { menus };
});
