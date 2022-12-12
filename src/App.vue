<script setup>
import { RouterView } from "vue-router";
import HeaderComp from "./components/headerComp.vue";
import FooterComp from "./components/footerComp.vue";
</script>

<template>
  <header></header>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style>
.FooterComp {
  bottom: 0;
  position: fixed;
}
body {
  background-color: rgb(246, 242, 242, 0.739);
}
</style>
