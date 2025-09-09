<template>
  <div>
    <section
      class="hero-section d-flex align-items-center justify-content-center"
    >
      <video class="hero-video" autoplay muted loop playsinline>
        <source :src="universityMP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="scroll-indicator">
        <div class="my-4 get-started-btn d-none">
          <button
            type="button"
            @click.prevent="showModal = true"
            class="btn btn-light px-4 py-2"
          >
            <i class="bi bi-rocket me-1 h5"></i>
            Get Started
          </button>
        </div>

        <div>
          <span>Scroll to Explore</span>
          <i class="bi bi-chevron-down"></i>
        </div>
      </div>
    </section>
  </div>
  <RequestDemoModal v-model="showModal" />
</template>

<script setup>
import { ref } from "vue";
import universityMP4 from "@/assets/videos/university.mp4";
import RequestDemoModal from "@/components/RequestDemoModel.vue";
const showModal = ref(false);
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
}

.scroll-indicator .bi-chevron-down {
  display: block;
  font-size: 2rem;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 576px) {
  .get-started-btn {
    display: block !important;
  }
}
</style>