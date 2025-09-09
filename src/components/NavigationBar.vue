<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar col-8 m-auto">
      <div class="container">
        <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
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

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ms-auto d-flex align-items-center">
            <a class="btn btn-outline-light me-3 get-started-btn" @click.prevent="showModal = true"
              >Get Started</a
            >

            <!-- <button
              class="btn btn-link text-light me-1 nav-icon-btn"
              type="button"
            >
              <i class="bi bi-search"></i>
            </button>

            <button class="btn btn-link text-light nav-icon-btn" type="button">
              <i class="bi bi-list"></i>
            </button> -->
          </div>
        </div>
      </div>
    </nav>
    <RequestDemoModal v-model="showModal" />
  </div>
</template>

<script setup>
import lightleap_logo from "@/assets/images/lightleap_logo.png";
import lightleap_logowebp from "@/assets/images/lightleap_logowebp.webp";

import { ref } from 'vue'
import RequestDemoModal from "@/components/RequestDemoModel.vue"

const showModal = ref(false);


</script>

<style scoped>
</style>
