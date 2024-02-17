<script setup lang="ts">
import { ref } from 'vue';
const toggle = ref(null);
</script>
<template>
  <div class="d-flex justify-center">
    <v-btn-toggle
      v-model="toggle"
      color="primary"
      class="text-center"
      variant="outlined"
      style="width: 100%;"
    >
      <v-text-field
        density="compact"
        label="Qisqa nomlanishi"
        hide-details
        variant="outlined"
        style="border-right-color: white !important; height: 48px !important;"
      ></v-text-field>
      <v-btn icon="mdi-format-align-right"></v-btn>
    </v-btn-toggle>
  </div>
  <!-- <div class="">
    <v-text-field
      density="compact"
      label="Qisqa nomlanishi"
      hide-details
      variant="outlined"
    ></v-text-field>
  </div> -->
</template>