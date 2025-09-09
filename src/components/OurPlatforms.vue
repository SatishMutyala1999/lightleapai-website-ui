<template>
  <div class="py-5">
    <div class="col-10 mx-auto">
      <div class="row">
        <div class="col-12">
          <h1 class="display-4 fw-normal text-dark mb-5">Our Platforms</h1>
        </div>
      </div>

      <!-- Loop through platforms -->
      <div
        v-for="(platform) in platforms"
        :key="platform.name"
        class="d-flex mb-5 pb-5 align-items-center justify-content-around gap-4 main-platform"
      >
        <!-- Column 1: Platform name -->
        <div class="col-sm-12 col-md-4 col-12 d-flex gap-4 left-platform-div-text">
          <div class="version-number">{{ platform.version }}</div>
          <div class="d-flex flex-column">
            <div class="platform-name mb-4 text-center">
              {{ platform.name }}
            </div>
            <div class="subtitle-text text-center">
              {{ platform.subtitle }}
            </div>
          </div>
        </div>

        <!-- Column 2: Video -->
        <div class="col-sm-12 col-md-4 col-12 d-flex justify-content-center">
          <div class="platform-video ">
            <video
              autoplay
              muted
              loop
              class="video-clip"
              style="max-width: 100%; border-radius: 10px;"
            >
              <source :src="platform.video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <!-- Column 3: Description -->
        <div class="col-sm-12 col-md-4 col-12 ms-5">
          <div class="platform-description">
            <p
              v-for="(line, i) in platform.description"
              :key="i"
              class="lead text-dark"
              :class="{ 'mb-0': i < platform.description.length - 1 }"
            >
              {{ line }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import atlasMP4 from "@/assets/videos/atlas.mp4";
// import fraudMP4 from "@/assets/videos/fraud.mp4";
import polrisMP4 from "@/assets/videos/polaris.mp4";
import prismMP4 from "@/assets/videos/prism.mp4";
import fraudlatest from "@/assets/videos/fraud_latest.mp4";
const platforms = [
  {
    version: "0.1",
    name: "Orion",
    subtitle: "Fraud Intelligence",
    video: fraudlatest,
    description: [
      "Detect fraud,",
      "across admissions and aid",
      "without blocking real students",
    ],
  },
  {
    version: "0.2",
    name: "Prism",
    subtitle: "Document Intelligence",
    video: prismMP4,
    description: [
      "AI simplifies reviews,",
      "with fewer manual steps",
      "and faster outcomes",
    ],
  },
  {
    version: "0.3",
    name: "Polaris",
    subtitle: "Students Service Accelerator",
    video: polrisMP4,
    description: [
      "Triage requests,",
      "Prioritize needs,",
      "keep students progressing",
    ],
  },
  {
    version: "0.4",
    name: "Atlas",
    subtitle: "Data Foundation",
    video: atlasMP4,
    description: [
      "Streamline transfers,",
      "catch anomalies early",
      "and keep data reliable",
    ],
  },
];
</script>

<style>
</style>