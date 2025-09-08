<template>
  <div class="container custom-container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-4 fw-normal text-dark mb-5">Our Trusted Partners</h1>
      </div>
    </div>
    <div class="marquee-container">
      <div class="marquee-content d-flex align-items-center">
        <!-- First set of logos -->
        <div class="logo-item mx-4">
          <img :src="foothill_latest" alt="foothill" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="ivtech" alt="ivtech" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="sanbernadio" alt="sanbernadio" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="rancho" alt="rancho" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="SWC" alt="SWC" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="statecenter" alt="statecenter" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="chabot" alt="chabot" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="CVC" alt="CVC" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="NAPA" alt="NAPA" class="logo-img" />
        </div>
        <div class="logo-item mx-4">
          <img :src="westvalley" alt="westvalley" class="logo-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import foothill_latest from "@/assets/images/foothill_latest.png";
import ivtech from "@/assets/images/ivtech.jpeg";
import sanbernadio from "@/assets/images/sanbernadio.png";
import rancho from "@/assets/images/rancho.jpg";
import SWC from "@/assets/images/SWC.webp";
import statecenter from "@/assets/images/statecenter.webp";
import chabot from "@/assets/images/chabot.jpg";
import CVC from "@/assets/images/CVC.png";
import NAPA from "@/assets/images/NAPA.jpg";
import westvalley from "@/assets/images/westvalley.png";
</script>

<style>
</style>