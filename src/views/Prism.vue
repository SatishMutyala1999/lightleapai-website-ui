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
          <h1 class="hero-title">PRISM</h1>
        </div>

        <!-- Right: Description -->
        <div class="col-md-6 text-center text-md-end">
          <p class="hero-text mb-0">
            Intelligence in <br />
            Every Transcript.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Orion Image -->
  <div class="container py-3">
    <div class="row ms-0 d-flex align-items-center">
      <img :src="prism_img" alt="prism_img" class="prism_img ms-0" />
    </div>
  </div>

  <!-- What is Orion-->
  <div class="container mt-5 border-top">
    <div class="row align-items-start">
      <!-- Left Heading -->
      <div class="col-lg-6 mt-5 mb-lg-0">
        <h2 class="fw-bold">From Documents to Insights</h2>
        <!-- Description (always below left heading) -->
          <img
          :src="prism_ocr"
          alt="prism_ocr"
          class="img-fluid rounded shadow-sm pt-5" 
        /> 
      </div>

      <!-- Right Heading -->
      <div class="col-lg-6 mt-5 align-items-center py-lg-5">
       <p class="mt-lg-5 py-lg-5 ms-4 " style="line-height:1.7rem; font-weight:150px">
         Prism automates reading transcripts, applications, and supporting documents with precision. 
         It extracts clean, structured fields and highlights insights for advisors and reviewers.
        </p>
        <p class= "py-2 ms-4 mb-2" style="line-height:1.7rem; font-weight:100px">
         With OCR, schema-aware parsing, and human-in-the-loop validation, Prism ensures accurate data 
         capture and faster decisions while reducing manual work.
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
         Prism streamlines admissions and academic evaluation by reducing repetitive manual tasks and 
         enabling institutions to act on structured insights instantly. 
         It ensures accuracy, transparency, and efficiency in academic decision-making.
        </p>
        <p class="mt-5">
          By combining automation with human validation, Prism empowers universities and 
          education providers to scale operations, cut costs, and improve student experience.
        </p>
      </div>

      <!-- Right Column -->
      <div class="col-lg-6 d-flex flex-column mt-5 ">
         <video autoplay muted loop class="rounded-5">
      <source :src="prism_testimonals" />
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
import "../styles/orion.css";
import prism_testimonals from "@/assets/videos/prism_test.mp4";
import  prism_img from "@/assets/images/prism_ocr.jpg"; 
import  prism_ocr from "@/assets/images/prism_ocr_1.png"; 
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