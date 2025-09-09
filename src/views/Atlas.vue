<template>
  <div>
    <a href="javascript:void(0)"
       class="btn btn-dark get-started-fixed d-sm-none" @click="showModal=true">
      <i class="bi bi-rocket-takeoff-fill me-2"></i> Get Started
    </a>
    <!-- Modal component (controlled by v-if) -->
    <Modal v-if="showModal" @close="showModal = false" />
    <!-- Hero Section -->
    <div class="container py-5">
      <div class="row align-items-center justify-content-center mx-0 mt-5 ps-0">
        <!-- Left: ORION -->
        <div class="col-md-6 text-center text-md-start">
          <h1 class="hero-title">ATLAS</h1>
        </div>

        <!-- Right: Description -->
        <div class="col-md-6 text-center text-md-end">
          <p class="hero-text mb-0">
            Normalize Data, <br />
            Seamless Flow.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Orion Image -->
  <div class="container py-3">
    <div class="row ms-0 d-flex align-items-center">
      <img :src="atlas_img" alt="atlas_img" class="atlas_img ms-0" />
    </div>
  </div>

  <!-- What is Orion-->
  <div class="container mt-5 border-top">
    <div class="row align-items-start">
      <!-- Left Heading -->
      <div class="col-lg-6 mt-5 mb-lg-0">
        <h2 class="fw-bold">Data Pipelines Made Reliable</h2>
        <!-- Description (always below left heading) -->
          <img
          :src="atlas"
          alt="Military Vehicle"
          class="img-fluid rounded shadow-sm pt-5" 
        /> 
      </div>

      <!-- Right Heading -->
      <div class="col-lg-6 mt-5 align-items-center py-lg-5">
       <p class="mt-lg-5 py-lg-5 ms-4 " style="line-height:1.7rem; font-weight:150px">
          Atlas moves data seamlessly between systems—from on-prem to SaaS, SIS to warehouses—while cleaning, 
          reconciling, and denoising along the way. Its built-in “juicer/denoiser” spots anomalies early and 
          suggests fixes before they hit production.
        </p>
        <p class= "py-2 ms-4 mb-2" style="line-height:1.7rem; font-weight:100px">
          With secure connectors, mapping rules, validation checks, and dry-run cutovers, 
          Atlas ensures data pipelines stay accurate, reliable, and ready for scale.
        </p>
      </div>
    </div>
  </div>
  <!--Fraud Details-->
  <div class="container mt-5 py-4 border-top">
    <div class="row">
      <!-- Left Column -->
      <div class="col-lg-6 mb-4 mb-lg-0">
        <h2 class="fw-bold">Industry Impact</h2>
        <p class="mt-5">
         Atlas reduces costly downtime by catching anomalies and reconciling 
         errors before they disrupt operations.Organizations gain confidence that 
         their data pipelines deliver accuracy, speed, and security at scale.
        </p>
        <p class="mt-5">
          By automating validation, deduplication, and cutover checks, Atlas helps 
          industries move faster while avoiding manual clean-up and compliance risks. 
          The result: trusted data powering smarter decisions.
        </p>
      </div>

      <!-- Right Column -->
      <div class="col-lg-6 d-flex flex-column mt-5 ">
         <video autoplay muted loop class="rounded-5">
      <source :src="atlas_testimonals" />
      Your browser does not support the video tag.
    </video>
      </div>
    </div>

    <!--Meet Our Partners-->
    <div class="container mt-5 py-5 border-top">
      <div class="row">
        <div></div>
      </div>
    </div>
    <a href="#"
       class="btn btn-dark get-started-fixed d-sm-none" @click="showModal=true">
      <i class="bi bi-rocket-takeoff-fill me-2"></i> Get Started
    </a>
     <RequestDemoModal v-model="showModal" />
  </div>
</template>

<script setup>
import {ref} from "vue";
import atlas from "@/assets/images/atlas_12.jpg";
import "../styles/orion.css";
import atlas_testimonals from "@/assets/videos/atlas_test.mp4";
import  atlas_img from "@/assets/images/atlas_1.jpg"; 
import RequestDemoModal from "@/components/RequestDemoModel.vue";
const showModal = ref(false);

</script>

<style scoped>
.get-started-fixed {
  position: fixed;
  bottom: 15px;   /* distance from bottom */
  left: 50%;      /* center horizontally */
  transform: translateX(-50%);
  z-index: 1050;  /* keep above everything */
}
</style>