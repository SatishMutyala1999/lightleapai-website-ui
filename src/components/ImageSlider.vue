<template>
  <div class="my-5 px-5">
    <div class="d-flex flex-wrap mb-4">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="lt_cardSelector me-2 mb-2"
        :data-index="index"
        @click="goToSlide(index)"
      >
        <span
          class="progress-fill"
          :style="{ width: progress[index] + '%' }"
        ></span>
        <div
          class="position-relative z-1"
          :class="{ 'text-white': progress[index] > 0 }"
        >
          {{ slide.title }}
        </div>
      </button>
    </div>

    <div
      id="carouselExampleAutoplaying"
      class="carousel slide wet-asphalt"
      data-bs-ride="carousel"
      data-bs-pause="false"
      :data-bs-interval="slideDuration"
    >
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="slide.img" class="d-block w-100" :alt="slide.title" />
          <div class="carousel-overlay">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.desc }}</p>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="bi bi-arrow-left" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="bi bi-arrow-right" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ConversationalOs from "@/assets/images/Aether_latest.png";
import DataMigration from "@/assets/images/Data_Migration.JPG";
import DocumentIntelligence from "@/assets/images/DocumentIntelligence.png";
import FraudIntelligence from "@/assets/images/fraud_intelligence.JPG";
import studentservices1 from "@/assets/images/student_services_1.JPG";

const slides = [
  {
    title: "Conversational OS",
    desc: "Smarter Fraud. Faster Data. Sharper Documents. Stronger Students.",
    img: ConversationalOs,
  },
  {
    title: "Document Intelligence",
    desc: "From Paper to Insights: The Future of Document Intelligence",
    img: DocumentIntelligence,
  },
  {
    title: "Fraud Intelligence",
    desc: "AI-Powered Fraud Intelligence for a Safer Tomorrow",
    img: FraudIntelligence,
  },
  {
    title: "Data Migration",
    desc: "Seamless Data Migration with Intelligent Transformation",
    img: DataMigration,
  },
  {
    title: "Student Services",
    desc: "AI-Driven Student Services for Smarter Support and Success",
    img: studentservices1,
  },
];

const activeIndex = ref(0);
const totalItems = slides.length;
const progress = ref(Array(totalItems).fill(0));

const intervalDuration = 50;
const slideDuration = 8000;
let progressTimer = null;

function startProgress(index) {
  clearInterval(progressTimer);

  progress.value = progress.value.map((_, i) => (i === index ? 0 : 0));

  const increment = (intervalDuration / slideDuration) * 100;

  progressTimer = setInterval(() => {
    if (progress.value[index] >= 100) {
      progress.value[index] = 100;
      clearInterval(progressTimer);
    } else {
      progress.value[index] += increment;
    }
  }, intervalDuration);
}

function goToSlide(index) {
  const carouselEl = document.getElementById("carouselExampleAutoplaying");
  const carousel = bootstrap.Carousel.getInstance(carouselEl);
  carousel.to(index);
}

onMounted(() => {
  const carouselEl = document.getElementById("carouselExampleAutoplaying");
  startProgress(0);

  carouselEl.addEventListener("slid.bs.carousel", (event) => {
    activeIndex.value = event.to;
    startProgress(event.to);
  });
});

onBeforeUnmount(() => {
  clearInterval(progressTimer);
});
</script>

<style scoped>
.carousel-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  background: hsla(0, 0%, 79%, 0.3);
  backdrop-filter: blur(5px);
  padding: 2.5rem 2rem;
  border-radius: 8px;
  width: 35%;
  text-align: center;
}

.carousel-overlay h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.carousel-overlay p {
  margin: 5px 0 0;
  font-size: 1rem;
}

.carousel-control-prev,
.carousel-control-next {
  opacity: 1 !important;
}

.carousel-control-prev span,
.carousel-control-next span {
  background-color: hsla(0, 0%, 100%, 0.2);
  color: white !important;
  font-size: 1.4rem;
  padding: 0.6rem 2rem;
}

.lt_cardSelector {
  position: relative;
  background: #dcdcdc;
  color: black;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  flex: 1;
  cursor: pointer;
  overflow: hidden;
  flex: 1 1 150px;
  min-width: 150px;
  max-width: 250px;
}

.progress-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: gray;
  transition: width 0.05s linear;
  color: white;
}

@media (max-width: 576px) {
  .lt_cardSelector div {
    font-size: 0.85rem;
  }
  .carousel-overlay {
    padding: 1rem 0.5rem;
    width: 55%;
  }
  .carousel-overlay h3,
  .carousel-overlay p {
    font-size: 12px !important;
  }
}
</style>
