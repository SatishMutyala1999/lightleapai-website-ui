<template>
  <div>
    <section class="lt_design_background_color">
      <div class="p-4">
        <div class="lt_usecase_section">
          <div class="lt_content_wrapper">
            <div class="lt_carousel_header">
              <div class="lt_cardselectorContainer">
                <button class="lt_cardSelector" data-index="0">
                  <span class="progress-fill"></span>
                  <div class="lt_button_textContent">Conversational OS</div>
                </button>
                <button class="lt_cardSelector" data-index="1">
                  <span class="progress-fill"></span>
                  <div class="lt_button_textContent">Document Intelligence</div>
                </button>
                <button class="lt_cardSelector" data-index="2">
                  <span class="progress-fill"></span>
                  <div class="lt_button_textContent">Fraud Intelligence</div>
                </button>
                <button class="lt_cardSelector" data-index="3">
                  <span class="progress-fill"></span>
                  <div class="lt_button_textContent">Data Migration</div>
                </button>
                <button class="lt_cardSelector" data-index="4">
                  <span class="progress-fill"></span>
                  <div class="lt_button_textContent">Student Services</div>
                </button>
              </div>
              <a class="lt_see_all"> See All </a>
            </div>
            <div id="lt_images_wrapper">
              <div class="lt_space_for_images" data-index="0">
                <p class="lt_item_mobile_reference">Conversational OS</p>
                <a class="lt_design_features mt-4" href="" id="">
                  <img
                    :src="ConversationalOs"
                    alt="ConversationalOS"
                    class="lt_design_feature_image"
                  />
                  <div
                    class="lt_design_textcontainer lt_design_textContainer_single"
                  >
                    <h3 class="lt_design_title">
                      Smarter Fraud. Faster Data. Sharper Documents. Stronger
                      Students.
                    </h3>
                  </div>
                  <div class="lt_design_controls">
                    <button type="button" class="lt_design_control left">
                      <i class="bi bi-arrow-left"></i>
                    </button>
                    <button type="button" class="lt_design_control right">
                      <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </a>
              </div>

              <div class="lt_space_for_images" data-index="1">
                <p class="lt_item_mobile_reference">Document Intelligence</p>
                <a class="lt_design_features mt-4" href="" id="">
                  <img
                    :src="DocumentIntelligence"
                    alt="DocumentIntelligence"
                    class="lt_design_feature_image"
                  />
                  <div
                    class="lt_design_textcontainer lt_design_textContainer_single"
                  >
                    <h3 class="lt_design_title">
                      From Paper to Insights: The Future of Document
                      Intelligence
                    </h3>
                  </div>
                  <div class="lt_design_controls">
                    <button class="lt_design_control left">
                      <i class="bi bi-arrow-left"></i>
                    </button>
                    <button class="lt_design_control right">
                      <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </a>
              </div>

              <div class="lt_space_for_images" data-index="2">
                <p class="lt_item_mobile_reference">Fraud Intelligence</p>
                <a class="lt_design_features mt-4" href="" id="">
                  <img
                    :src="FraudIntelligence"
                    alt="FraudIntelligence"
                    class="lt_design_feature_image"
                  />
                  <div
                    class="lt_design_textcontainer lt_design_textContainer_single"
                  >
                    <h3 class="lt_design_title">
                      AI-Powered Fraud Intelligence for a Safer Tomorrow
                    </h3>
                  </div>
                  <div class="lt_design_controls">
                    <button class="lt_design_control left">
                      <i class="bi bi-arrow-left"></i>
                    </button>
                    <button class="lt_design_control right">
                      <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </a>
              </div>

              <div class="lt_space_for_images" data-index="2">
                <p class="lt_item_mobile_reference">Data Migration</p>
                <a class="lt_design_features mt-4" href="" id="">
                  <img
                    :src="DataMigration"
                    alt="DataMigration"
                    class="lt_design_feature_image"
                  />
                  <div
                    class="lt_design_textcontainer lt_design_textContainer_single"
                  >
                    <h3 class="lt_design_title">
                      Seamless Data Migration with Intelligent Transformation
                    </h3>
                  </div>
                  <div class="lt_design_controls">
                    <button class="lt_design_control left">
                      <i class="bi bi-arrow-left"></i>
                    </button>
                    <button class="lt_design_control right">
                      <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </a>
              </div>

              <div class="lt_space_for_images" data-index="2">
                <p class="lt_item_mobile_reference">Student Services</p>
                <a class="lt_design_features mt-4" href="" id="">
                  <img
                    :src="studentservices1"
                    alt="studentservices"
                    class="lt_design_feature_image"
                  />
                  <div
                    class="lt_design_textcontainer lt_design_textContainer_single"
                  >
                    <h3 class="lt_design_title">
                      AI-Driven Student Services for Smarter Support and Success
                    </h3>
                  </div>
                  <div class="lt_design_controls">
                    <button class="lt_design_control left">
                      <i class="bi bi-arrow-left"></i>
                    </button>
                    <button class="lt_design_control right">
                      <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ConversationalOs from "@/assets/images/ConversationalOS.png";
import DataMigration from "@/assets/images/Data Migration.JPG";
import DocumentIntelligence from "@/assets/images/DocumentIntelligence.png";
import FraudIntelligence from "@/assets/images/FraudIntelligence.JPG";
import studentservices1 from "@/assets/images/studentservices1.JPG";
</script>

<style>
</style>