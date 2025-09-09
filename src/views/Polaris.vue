<template>
  <div>
    <a href="javascript:void(0)"
       class="btn btn-dark get-started-fixed d-sm-none" @click="showModal=true">
      <i class="bi bi-rocket-takeoff-fill me-2"></i> Get Started
    </a>
    <!-- Hero Section -->
    <div class="container py-5">
      <div class="row align-items-center justify-content-center mx-0 mt-5 ps-0">
        <!-- Left: ORION -->
        <div class="col-md-6 text-center text-md-start">
          <h1 class="hero-title">Polaris</h1>
        </div>

        <!-- Right: Description -->
        <div class="col-md-6 text-center text-md-end">
          <p class="hero-text mb-0">
            Guide Students <br />
            Smarter.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Orion Image -->
  <div class="container py-3">
    <div class="row ms-0 d-flex align-items-center">
      <img :src="student_support" alt="student_support" class="student_support ms-0" />
    </div>
  </div>

  <!-- What is Orion-->
  <div class="container mt-5 border-top">
    <div class="row align-items-start">
      <!-- Left Heading -->
      <div class="col-lg-6 mt-5 mb-lg-0">
        <h2 class="fw-bold">Smart Student Support</h2>
        <!-- Description (always below left heading) -->
          <img
          :src="students"
          alt="students"
          class="img-fluid rounded shadow-sm pt-5" 
        /> 
      </div>

      <!-- Right Heading -->
      <div class="col-lg-6 mt-5 align-items-center py-lg-5">
       <p class="mt-lg-5 py-lg-5 ms-4 " style="line-height:1.7rem; font-weight:150px">
          Polaris intelligently classifies student requests by urgency,type and eligibilty
          to reduce wait times and ensure the right support path - advisor or self-service. 
          By prioritizing high-risk needs,it keeps students on track toward successful outcomes.
        </p>
        <p class= "py-2 ms-4 mb-2" style="line-height:1.7rem; font-weight:100px">
          with automated intake checks,smart routing,SLA-based queue management, 
          Polaris equips advisors with clear notes and response templates.Operations
          teams benefit real-time dashboards to monitor queue health and service performance.
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
          Polaris transforms student services by reducing operationsla bottlenecks
          and improving service efficiency across institutions.By automating intake, 
          routing and prioritization,it lowers administrative overhead while
          ensuring students receive timely,accurate guidance.
        </p>
        <p class="mt-5">
          This streamlined approach enhances advisor productivity,shortens
          resolution times,and raises overall student satisfaction.
          Institutions benefit from measurable improvements in service
          delivery,resource allocation,and student success outcomes.
        </p>
      </div>

      <!-- Right Column -->
      <div class="col-lg-6 d-flex flex-column mt-5 ">
         <video autoplay muted loop class="rounded-5">
      <source :src="polaris_testimonals" />
      Your browser does not support the video tag.
    </video>
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
import polaris_testimonals from "@/assets/videos/polaris_test.mp4";
import  student_support from "@/assets/images/Student_support.webp";  
import  students  from "@/assets/images/students.jpg";
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