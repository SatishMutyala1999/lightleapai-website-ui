<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-5 card-default-height">
            <div href="" @click="showModal = true" class="h-100 pointer-cursor">
              <div
                class="card h-100 border-0 shadow-sm rounded-4 p-4 bg-secondary-subtle d-flex justify-content-between align-items-start flex-row"
              >
                <h2 class="fw-bold mb-0 text-dark">Get Started</h2>
                <span class="fs-4 text-dark"
                  ><i class="bi bi-arrow-right"></i
                ></span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-5 card-default-height">
            <a href="#" class="text-decoration-none">
              <div
                class="card h-100 border-0 shadow-sm rounded-4 text-white p-4 bg-dark d-flex justify-content-between align-items-start flex-column"
                style=""
              >
                <a
                  href="#"
                  class="text-decoration-none d-flex justify-content-between align-items-center col-12"
                  ><h2 class="fw-bold mb-0 text-white">Contact Us</h2>
                 </a>
                <div class="mt-4">
                  <p class="mb-0">
                    <a
                      href="tel:8886513309"
                      class="text-decoration-underline text-light"
                    >
                      (888)-651-3309</a
                    >
                  </p>
                  <p class="mb-0">3063 Peachtree Industrial Blvd #201</p>
                  <p class="mb-0">Duluth, GA 30097</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <RequestDemoModal v-model="showModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import RequestDemoModal from "@/components/RequestDemoModel.vue";

const showModal = ref(false);
</script>

<style scoped>
.card-default-height {
  min-height: 10rem;
}
.pointer-cursor {
  cursor: pointer;
}
</style>