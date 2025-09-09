<template>
  <div
    class="modal fade"
    tabindex="-1"
    :class="{ show: props.modelValue }"
    :style="props.modelValue ? 'display: block;' : 'display: none;'"
    aria-labelledby="signupModalLabel"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm modal-md modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title fw-bold d-flex align-items-center"
            id="signupModalLabel"
          >
            <i class="bi bi-person me-2 display-6"></i> SignUp for LightLeap
            Trial
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
            aria-label="Close"
          ></button>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="modal-body px-5 py-4">
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" id="firstName" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" id="lastName" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="institution" class="form-label">Institution</label>
              <input
                type="text"
                id="institution"
                class="form-control"
                required
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                class="form-control"
                rows="3"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn px-4 btn-outline-secondary"
              @click="closeModal"
            >
              Close
            </button>
            <button type="submit" class="btn px-4 btn-dark">
              Send <i class="bi bi-send ms-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div
    class="modal-backdrop fade"
    :class="{ show: props.modelValue }"
    v-if="props.modelValue"
  ></div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const modalRef = ref(null);

const closeModal = () => {
  emit("update:modelValue", false);
};

const handleSubmit = () => {
  alert("Form submitted!");
  closeModal();
};

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }
);
</script>

<style>
.modal-backdrop {
  transition: opacity 0.15s linear;
}
</style>
