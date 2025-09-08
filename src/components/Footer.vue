<template>
  <div
    class=""
    style="border-top-left-radius: 3rem; border-top-right-radius: 3rem"
  >
    <footer class="container pt-5">
      <div class="row">
        <!-- Left Column -->
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div class="footer-left">
            <!-- Copyright -->
            <div class="copyright mb-4">
              <p class="mb-1">© 2025 lightleapAI.</p>
              <p class="mb-0">All rights reserved.</p>
            </div>

            <!-- Cookies Settings -->
            <div class="cookies-section mb-4 pb-4 border-bottom"></div>
            <!-- Social Media Buttons -->
            <div class="social-buttons">
              <button
                class="btn social-btn me-2 mb-2"
                onclick="window.location.href='https://www.youtube.com/@n2nchannel'"
              >
                YOUTUBE
              </button>
              <button
                class="btn social-btn me-2 mb-2"
                onclick="window.location.href='https://x.com/N2NServicesInc'"
              >
                X
              </button>
              <button
                class="btn social-btn me-2 mb-2"
                onclick="window.location.href='https://www.linkedin.com/showcase/socrateslabs/?originalSubdomain=in'"
              >
                LINKEDIN
              </button>
              <button
                class="btn social-btn mb-2"
                onclick="window.location.href='https://www.instagram.com/n2nservicesinc/#'"
              >
                INSTAGRAM
              </button>
            </div>
          </div>
        </div>

        <!-- Right Columns -->
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <!-- First Column - Offerings -->
            <div class="col-md-4 mb-4">
              <h6 class="footer-heading text-uppercase text-muted mb-3">
                COMPANY
              </h6>
              <ul class="list-unstyled footer-links">
                <li>
                  <a href="#" class="text-dark text-decoration-none"
                    >About us</a
                  >
                </li>
                <li>
                  <a href="#" class="text-dark text-decoration-none">Careers</a>
                </li>
                <li>
                  <a href="#" class="text-dark text-decoration-none">Events</a>
                </li>
                <li>
                  <a href="#" class="text-dark text-decoration-none"
                    >News Letter</a
                  >
                </li>
              </ul>
            </div>

            <!-- Second Column - Impact Studies -->
            <div class="col-md-4 mb-4">
              <h6 class="footer-heading text-uppercase text-muted mb-3">
                Terms & Policies
              </h6>
              <ul class="list-unstyled footer-links">
                <li>
                  <a href="#" class="text-dark text-decoration-none"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a href="#" class="text-dark text-decoration-none"
                    >Terms of Service</a
                  >
                </li>
                <li>
                  <a href="#" class="text-dark text-decoration-none"
                    >Usage Policy</a
                  >
                </li>
                <li>
                  <a href="#" class="text-dark text-decoration-none"
                    >Resources</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-4 mb-4 d-flex align-items-center">
              <img :src="SOC_black" alt="SOC black" class="security_badge" />
              <img :src="HESS" alt="HESS" class="security_badge" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import SOC_black from "@/assets/images/SOC black.png";
import HESS from "@/assets/images/HESS.png";
</script>

<style>
</style>