<template>
  <div>
    <HeroSection />
    <ImageSlider />
    <OurPlaftformHeading />
    <OurPlatforms />
    <Partners />
    <RequestDemo />
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import OurPlaftformHeading from "../components/OurPlaftformHeading.vue";
import OurPlatforms from "../components/OurPlatforms.vue";
import Partners from "../components/Partners.vue";
import RequestDemo from "../components/RequestDemo.vue";
import ImageSlider from "../components/ImageSlider.vue";
</script>

<style>
</style>