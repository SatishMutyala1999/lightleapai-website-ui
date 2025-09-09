<template>
  <div>
    <div
      class="d-flex align-items-center justify-content-start bg-light container custom-container my-5"
    >
      <div class="row g-4 w-100">
        <!--Request Demo-->
        <div class="col-md-6 mt-2">
          <div
            class="cta-card cta-card-light p-3 rounded-4"
            @click="showModal = true"
          >
            <div
              class="position-relative z-2 d-flex justify-content-between align-items-start"
            >
              <h2 class="display-6 fw-bold text-dark mb-0">Get Started</h2>
              <div class="cta-arrow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!--Contact Us-->
        <div class="col-md-6 mt-2">
          <div class="cta-card cta-card-dark p-3 rounded-4">
            <div
              class="position-relative z-2 d-flex justify-content-between align-items-start"
            >
              <h2 class="display-6 fw-bold text-white mb-0">Contact Us</h2>
              <p class="mb-4">
                <a
                  href="tel:8886513309"
                  class="text-decoration-underline text-light"
                  >(888)-651-3309</a
                >
              </p>
              <p class="mb-0">33063 Peachtree Industrial Blvd #201</p>
              <p class="mb-0">Duluth, GA 30097</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RequestDemoModal v-model="showModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import RequestDemoModal from "@/components/RequestDemoModel.vue";

const showModal = ref(false);
</script>

<style>
</style>