<template>
  <div class="navbar-backdrop">
    <nav class="navbar navbar-expand-lg">
      <div
        class="container d-flex justify-content-between align-items-center flex-nowrap"
      >
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img
            :src="lightleap_logo"
            alt="lightleap_logo"
            class="design_lightleap_logo me-2"
          />
          <img
            :src="lightleap_logowebp"
            alt="lightleap_logowebp"
            class="design_lightleap_logo_webp"
          />
        </a>

        <div class="ms-auto flex-shrink-0 get-started-btn">
          <button
            type="button"
            @click.prevent="showModal = true"
            class="btn btn-dark px-4 d-none d-md-block"
          >
            <i class="bi bi-rocket me-1 h5"></i>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  </div>
  <RequestDemoModal v-model="showModal" />
</template>

<script setup>
import lightleap_logo from "@/assets/images/lightleap_logo.png";
import lightleap_logowebp from "@/assets/images/lightleap_logowebp.webp";

import { ref } from "vue";
import RequestDemoModal from "@/components/RequestDemoModel.vue";

const showModal = ref(false);
</script>

<style scoped>
.design_lightleap_logo {
  height: 2rem;
  width: auto;
}

.design_lightleap_logo_webp {
  max-width: 12rem;
  height: auto;
}

.navbar-backdrop {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  max-width: 1200px;
  background-color: #ffffffba;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1050;
}

.get-started-btn .bi-rocket::before {
  transform: rotate(45deg);
}

@media (max-width: 576px) {
  .btn {
    font-size: 0.85rem;
    padding: 0.3rem 0.8rem;
  }
  .get-started-btn {
    display: none;
  }
}
</style>
