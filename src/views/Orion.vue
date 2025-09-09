<template>
  <div>
    
    
    <!-- Hero Section -->
    <div class="container py-5">
      <div class="row align-items-center justify-content-center mx-0 mt-5 ps-0">
        <!-- Left: ORION -->
        <div class="col-md-6 text-center text-md-start">
          <h1 class="hero-title">ORION</h1>
        </div>

        <!-- Right: Description -->
        <div class="col-md-6 text-center text-md-end">
          <p class="hero-text mb-0">
            AI-driven <br />
            fraud detection.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Orion Image -->
  <div class="container py-3">
    <div class="row ms-0 d-flex align-items-center">
      <img :src="fraud_img" alt="fraud_detection_complete" class="fraud_detection_complete ms-0" />
    </div>
  </div>

  <!-- What is Orion-->
  <div class="container mt-5 border-top">
    <div class="row align-items-start">
      <!-- Left Heading -->
      <div class="col-lg-6 mt-5 mb-lg-0">
        <h2 class="fw-bold">Fraud Command Center</h2>
        <!-- Description (always below left heading) -->
          <img
          :src="orion_img"
          alt="Military Vehicle"
          class="img-fluid rounded shadow-sm pt-5" 
        /> 
      </div>

      <!-- Right Heading -->
      <div class="col-lg-6 mt-5 align-items-center py-lg-5">
       <p class="mt-lg-5 py-lg-5 ms-4 " style="line-height:1.7rem; font-weight:150px">
          Orion by LightLeapAI is the fraud command center built for higher education.
          It protects admission,enrollment,financial aid, and payments with 
          powerful AI-driven risk scoring and ID verification.
        </p>
        <p class= "py-2 ms-4 mb-2" style="line-height:1.7rem; font-weight:100px">
          By uniting fraud monitoring,case management, and high-risk insights 
          in one workspace,Orion helps institutions block fraud while ensuring
         real students move forward without friction.
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
          Orion helps institutions cut fraud -related losses and protect
          critical revenue awarness. It enhances compliance with regulatory 
          standards while reinforcing the integrity of admissions
          and financial aid.
        </p>
        <p class="mt-5">
          By streamlining fraud detection and case management,
          Orion ensures effieciency for staff and a seamless,
          fair experience for genuine students.
        </p>
      </div>

      <!-- Right Column -->
      <div class="col-lg-6 d-flex flex-column mt-5 ">
         <video autoplay muted loop class="rounded-5">
      <source :src="orion_testimonals" />
      Your browser does not support the video tag.
    </video>
      </div>
    </div>

    <!--Meet Our Partners-->
    <a href="#"
       class="btn btn-dark get-started-fixed d-sm-none" @click="showModal=true">
      <i class="bi bi-rocket-takeoff-fill me-2"></i> Get Started
    </a>
     <RequestDemoModal v-model="showModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import orion_img from "@/assets/images/Orion.jpg";
import "../styles/orion.css";
import orion_testimonals from "@/assets/videos/orion_test.mp4";
import  fraud_img from "@/assets/images/fraud_detection_complete.jpg"; 
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