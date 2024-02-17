<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/images/logo.svg';
</script>
<template>
    <div class="logodark text-center">
        <RouterLink to="/dashboard" class="logo-title">
            <!-- <img :src="logo" style="width: 50px;" alt="home" /> -->
        </RouterLink>
        <div class="ml-2 text-left">
            <p class="login-title">LOGO </p>
            <span class="login-text"></span>
        </div>
    </div>
</template>
<style lang="scss">
.logodark {
    display: flex;
    align-items: center;

    .login-text {
        color: #000; 
        text-align: left;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.64px;
        // padding-bottom: 6px;
    }
    .login-title {
        color: #000810;
        text-align: left;
        font-size:16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
        letter-spacing: 0.96px;
    }
}
</style>