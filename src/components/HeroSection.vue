<template>
  <div>
    <div class="video-container">
      <video autoplay muted loop playsinline class="hero-video">
        <source :src="universityMP4" type="video/mp4" />
        <!-- <track
          src="captions.vtt"
          kind="captions"
          srclang="en"
          label="English"
        /> -->
        Your browser does not support the video tag.
      </video>
      <!-- Centered Text Overlay -->
      <div class="video-overlay">
        <span class="overlay-text">Empowering Education with AI</span>
      </div>
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <span class="arrow">↓</span>
        Scroll to Explore
      </div>
    </div>
  </div>
</template>

<script setup>
import universityMP4 from "@/assets/videos/university.mp4";
</script>

<style>
</style>