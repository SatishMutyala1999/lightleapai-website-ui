<template>
  <div>
    <footer class="py-5">
      <div class="container px-5">
        <div class="row align-items-start">
          <div class="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <p class="mb-3">
              &copy; 2025 lightleapAI. <br />All rights reserved.
            </p>
            <div
              class="d-flex justify-content-center justify-content-md-start align-items-center gap-3 flex-wrap"
            >
              <a href="https://www.youtube.com/@n2nchannel" target="_blank"
                ><i class="bi bi-youtube text-dark"></i
              ></a>
              <a href="https://x.com/N2NServicesInc" target="_blank"
                ><i class="bi bi-twitter-x text-dark"></i
              ></a>
              <a
                href="https://www.linkedin.com/showcase/socrateslabs/?originalSubdomain=in"
                target="_blank"
                ><i class="bi bi-linkedin text-dark"></i
              ></a>
              <a href="https://www.instagram.com/n2nservicesinc" target="_blank"
                ><i class="bi bi-instagram text-dark"></i
              ></a>
            </div>
          </div>

          <div class="col-6 col-md-2 mb-4 mb-md-0 company-section">
            <h6 class="fw-bold">COMPANY</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >About us</a
                >
              </li>
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >Careers</a
                >
              </li>
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >Events</a
                >
              </li>
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >News Letter</a
                >
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-4 mb-md-0 policies-section">
            <h6 class="fw-bold">TERMS & POLICIES</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >Terms of Service</a
                >
              </li>
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >Usage Policy</a
                >
              </li>
              <li>
                <a href="#" class="text-secondary text-decoration-none"
                  >Resources</a
                >
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-4 text-center text-md-end">
            <img
              :src="SOC_black"
              alt="AICPA SOC"
              class="img-fluid me-2"
              style="max-height: 8rem"
            />
            <img
              :src="HESS"
              alt="HESS Consortium"
              class="img-fluid"
              style="max-height: 8rem"
            />
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

<style scoped>
footer a i.bi {
  font-size: 1.5rem;
}
.bi-youtube {
  font-size: 2.4rem !important;
}

.company-section ul,
.policies-section ul {
  margin-top: 1.5rem;
}

.company-section li,
.policies-section li {
  margin-block: 0.5rem;
}
</style>