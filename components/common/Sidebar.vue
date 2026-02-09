
<script setup>
import { ref } from 'vue';
import menu_data from '~/data/menu_data';

const navTitle = ref("");

// Toggle menu open/close
const openMobileMenu = (menu) => {
  navTitle.value = navTitle.value === menu ? "" : menu;
};

const props = defineProps({
  openMenu:{
    type: Boolean
  },
  toggleMenu: {
    type: Function
  }
})
 
</script>


<template>
  <div>
    <div :class="`sidebar__area ${openMenu ? 'sidebar-opened' : ''}`">
      <div class="sidebar__wrapper">
        <div class="sidebar__close">
          <button class="sidebar__close-btn" id="sidebar__close-btn" @click="toggleMenu">
            <i class="fal fa-times"></i>
          </button>
        </div>
        <div class="sidebar__content mt-50 mb-20">
          <div class="mobile-menu fix mean-container">

            <div class="mean-bar">
              <nav class="mean-nav">
                <ul>
                  <li
                    v-for="(item, i) in menu_data"
                    :key="i"
                    :class="[
                      item.has_dropdown ? 'has-dropdown' : '',
                      navTitle === item.title ? 'dropdown-opened' : ''
                    ]"
                  >
                    <NuxtLink :to="item.link" class="linkstyle">{{ item.title }}</NuxtLink>
                    <template v-if="item.has_dropdown">
                      <ul class="sub-menu" :style="{ display: navTitle === item.title ? 'block' : 'none' }">
                        <li v-for="(sub_menu, index) in item.sub_menus" :key="index">
                          <NuxtLink :to="sub_menu.link">{{ sub_menu.title }}</NuxtLink>
                        </li>
                      </ul>
                      <a
                        class="mean-expand"
                        :class="{ 'mean-clicked': navTitle === item.title }"
                        @click="openMobileMenu(item.title)"
                        style="font-size: 18px; cursor: pointer;"
                      >
                        <i class="fal fa-plus"></i>
                      </a>
                    </template>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div :class="`body-overlay ${openMenu ? 'opened' : ''}`" @click="toggleMenu"></div>
  </div>
</template>

 