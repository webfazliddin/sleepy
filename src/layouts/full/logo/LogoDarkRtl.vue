<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/images/logo.svg';
</script>
<template>
    <div class="logo text-center">
        <RouterLink to="/">
            <img :src="logo" alt="home" />
        </RouterLink>
    </div>
</template>
