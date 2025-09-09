<template>
  <div>
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center display-4 fw-bold mb-5">Our Platforms</h2>

        <div class="row align-items-center my-5">
          <div
            class="col-lg-3 col-md-12 mb-3 mb-lg-0 text-center text-lg-start position-relative"
          >
            <span class="fw-bold text-secondary d-block d-lg-none">0.1</span>

            <span
              class="position-absolute top-0 start-0 translate-middle-y fw-bold h4 text-secondary d-none d-lg-block"
            >
              0.1
            </span>

            <h3 class="fw-bold ms-lg-5 display-1">Orion</h3>
            <p class="text-muted ms-lg-5">Fraud Intelligence</p>
          </div>

          <div class="col-lg-5 col-md-12 mb-3 mb-lg-0 px-5 video-container">
            <div class="ratio ratio-16x9">
              <video
                autoplay
                muted
                loop
                playsinline
                class="w-100 h-100 object-fit-cover"
              >
                <source :src="fraudlatest" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div class="col-lg-4 col-md-12 text-center text-lg-start">
            <p>
              Detect fraud, across admissions and aid, without blocking real
              students
            </p>
            <router-link to="/orion" class="btn btn-dark"
              >Learn More <i class="bi bi-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>

        <div class="row align-items-center mb-5">
          <div
            class="col-lg-3 col-md-12 mb-3 mb-lg-0 text-center text-lg-start position-relative"
          >
            <span class="fw-bold text-secondary d-block d-lg-none">0.2</span>

            <span
              class="position-absolute top-0 start-0 translate-middle-y fw-bold h4 text-secondary d-none d-lg-block"
            >
              0.2
            </span>

            <h3 class="fw-bold ms-lg-5 display-1">Prism</h3>
            <p class="text-muted ms-lg-5">Document Intelligence</p>
          </div>
          <div class="col-lg-5 col-md-12 mb-3 mb-lg-0 px-5 video-container">
            <div class="ratio ratio-16x9">
              <video
                autoplay
                muted
                loop
                playsinline
                class="w-100 h-100 object-fit-cover"
              >
                <source :src="prismMP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 text-center text-lg-start">
            <p>
              AI simplifies reviews, with fewer manual steps and faster outcomes
            </p>
            <router-link to="/prism" class="btn btn-dark"
              >Learn More <i class="bi bi-arrow-right ms-2"></i
            ></router-link>
          </div>
        </div>

        <div class="row align-items-center mb-5">
          <div
            class="col-lg-3 col-md-12 mb-3 mb-lg-0 text-center text-lg-start position-relative"
          >
            <span class="fw-bold text-secondary d-block d-lg-none">0.3</span>

            <span
              class="position-absolute top-0 start-0 translate-middle-y fw-bold h4 text-secondary d-none d-lg-block"
            >
              0.3
            </span>

            <h3 class="fw-bold ms-lg-5 display-1">Polaris</h3>
            <p class="text-muted ms-lg-5">Students Service Accelerator</p>
          </div>
          <div class="col-lg-5 col-md-12 mb-3 mb-lg-0 px-5 video-container">
            <div class="ratio ratio-16x9">
              <video
                autoplay
                muted
                loop
                playsinline
                class="w-100 h-100 object-fit-cover"
              >
                <source :src="polrisMP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 text-center text-lg-start">
            <p>Triage requests, Prioritize needs, keep students progressing</p>
            <router-link to="/polaris" class="btn btn-dark"
              >Learn More <i class="bi bi-arrow-right ms-2"></i
            ></router-link>
          </div>
        </div>

        <div class="row align-items-center">
          <div
            class="col-lg-3 col-md-12 mb-3 mb-lg-0 text-center text-lg-start position-relative"
          >
            <span class="fw-bold text-secondary d-block d-lg-none">0.4</span>

            <span
              class="position-absolute top-0 start-0 translate-middle-y fw-bold h4 text-secondary d-none d-lg-block"
            >
              0.4
            </span>

            <h3 class="fw-bold ms-lg-5 display-1">Atlas</h3>
            <p class="text-muted ms-lg-5">Data Foundation</p>
          </div>
          <div class="col-lg-5 col-md-12 mb-3 mb-lg-0 px-5 video-container">
            <div class="ratio ratio-16x9">
              <video
                autoplay
                muted
                loop
                playsinline
                class="w-100 h-100 object-fit-cover"
              >
                <source :src="atlasMP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 text-center text-lg-start">
            <p>
              Streamline transfers, catch anomalies early and keep data reliable
            </p>
            <router-link to="/atlas" class="btn btn-dark"
              >Learn More <i class="bi bi-arrow-right ms-2"></i
            ></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import atlasMP4 from "@/assets/videos/datamigration.mp4";
import polrisMP4 from "@/assets/videos/student_services.mp4";
import prismMP4 from "@/assets/videos/prism_latest.mp4";
import fraudlatest from "@/assets/videos/fraud_latest.mp4";
</script>

<style scoped>
.video-container video {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-container:hover video {
  opacity: 1;
}
@media (max-width: 576px) {
  .video-container video {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}
</style>