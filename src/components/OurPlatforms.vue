<template>
  <div class="container custom-container py-5">
    <div class="py-5">
      <div class="row">
        <div class="col-12">
          <h1 class="display-4 fw-normal text-dark mb-5">Our Platforms</h1>
        </div>
      </div>

      <!-- Orion Platform -->
      <div class="row mb-5 pb-5">
        <div class="col-lg-5 col-md-12">
          <div class="platform-description">
            <p class="lead text-dark mb-0">Detect fraud,</p>
            <p class="lead text-dark mb-0">across admissions and aid</p>
            <p class="lead text-dark">without blocking real students</p>
            <div class="platform-version mt-3">
              <span class="version-number">/0.1</span>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-12 d-flex align-items-center justify-content-center"
        >
          <div class="platform-video">
            <video autoplay muted loop class="video-clip">
              <source :src="fraudMP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="platform-brand">
            <h2 class="platform-name">Orion</h2>
          </div>
        </div>
      </div>

      <!-- Prism -->
      <div class="row mb-5 pb-5">
        <div class="col-lg-5 col-md-12">
          <div class="platform-description">
            <p class="lead text-dark mb-0">AI simplifies reviews,</p>
            <p class="lead text-dark mb-0">with fewer manual steps</p>
            <p class="lead text-dark">and faster outcomes</p>
            <div class="platform-version mt-3">
              <span class="version-number">/0.2</span>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-12 d-flex align-items-center justify-content-center"
        >
          <div class="platform-video">
            <video autoplay muted loop class="video-clip">
              <source :src="prismMP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-12 d-flex align-items-center justify-content-center"
        >
          <div class="platform-brand">
            <h2 class="platform-name">Prism</h2>
          </div>
        </div>
      </div>

      <!--Polaris-->
      <div class="row mb-5 pb-5">
        <div class="col-lg-5 col-md-12">
          <div class="platform-description">
            <p class="lead text-dark mb-0">Triage requests,</p>
            <p class="lead text-dark mb-0">Prioritize needs,</p>
            <p class="lead text-dark">keep students progressing</p>
            <div class="platform-version mt-3">
              <span class="version-number">/0.3</span>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-12 d-flex align-items-center justify-content-center"
        >
          <div class="platform-video">
            <video autoplay muted loop class="video-clip">
              <source :src="polrisMP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-12 d-flex align-items-center justify-content-center"
        >
          <div class="platform-brand">
            <h2 class="platform-name">Polaris</h2>
          </div>
        </div>
      </div>

      <!--Atlas-->
      <div class="row mb-5 pb-5">
        <div class="col-lg-5 col-md-12">
          <div class="platform-description">
            <p class="lead text-dark mb-0">Streamline transfers,</p>
            <p class="lead text-dark mb-0">catch anomalies early</p>
            <p class="lead text-dark">and keep data reliable</p>
            <div class="platform-version mt-3">
              <span class="version-number">/0.4</span>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-12 d-flex align-items-center justify-content-center"
        >
          <div class="platform-video">
            <video autoplay muted loop class="video-clip">
              <source :src="atlasMP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-12 d-flex align-items-center justify-content-center"
        >
          <div class="platform-brand">
            <h2 class="platform-name">Atlas</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import atlasMP4 from "@/assets/videos/atlas.mp4";
import fraudMP4 from "@/assets/videos/fraud.mp4";
import polrisMP4 from "@/assets/videos/polaris.mp4";
import prismMP4 from "@/assets/videos/prism.mp4";
</script>

<style>
</style>