<template>
     <div v-if="modelValue" class="modal-overlay">
    <div class="modal-container">
      <div class="modal-header">
        <h3 class = "pe-5">SignUp for LightLeap Trail</h3>
        <button @click="$emit('update:modelValue', false)">X</button>
      </div>
      <form @submit.prevent="handleSubmit">
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
          <input type="text" id="institution" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea id="message" class="form-control" rows="4" placeholder="Enter your message here..."></textarea>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-dark" style="width:100px">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const handleSubmit = () => {
  alert('Form submitted!')
  emit('update:modelValue', false)
}
</script>
