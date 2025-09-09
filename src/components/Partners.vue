<template>
  <div>
    <section class="py-5">
      <div class="container">
        <h2 class="text-center display-4 fw-bold mb-4">Our Partners</h2>
        <div class="overflow-hidden py-2">
          <div class="d-flex align-items-center gap-5 marquee">
            <img :src="foothill_latest" alt="Partner 1" class="partner-logo" />
            <img :src="ivtech" alt="Partner 2" class="partner-logo" />
            <img :src="sanbernadio" alt="Partner 3" class="partner-logo" />
            <img :src="rancho" alt="Partner 4" class="partner-logo" />
            <img :src="SWC" alt="Partner 5" class="partner-logo" />
            <img :src="chabot" alt="Partner 6" class="partner-logo" />
            <img :src="statecenter" alt="Partner 1" class="partner-logo" />
            <img :src="CVC" alt="Partner 2" class="partner-logo" />
            <img :src="NAPA" alt="Partner 3" class="partner-logo" />
            <img :src="westvalley" alt="Partner 4" class="partner-logo" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import foothill_latest from "@/assets/images/foothill_latest.png";
import ivtech from "@/assets/images/ivtech.jpeg";
import sanbernadio from "@/assets/images/sanbernadio.png";
import rancho from "@/assets/images/rancho.jpg";
import SWC from "@/assets/images/SWC.webp";
import statecenter from "@/assets/images/statecenter.webp";
import chabot from "@/assets/images/chabot.jpg";
import CVC from "@/assets/images/CVC.png";
import NAPA from "@/assets/images/NAPA.jpg";
import westvalley from "@/assets/images/westvalley.png";
</script>

<style scoped>
.partner-logo {
  height: 8rem;
  width: auto;
  flex-shrink: 0;
}

.marquee {
  animation: scroll-left 10s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>