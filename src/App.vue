<template>
  <div>
    <NavigationBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
</script>
