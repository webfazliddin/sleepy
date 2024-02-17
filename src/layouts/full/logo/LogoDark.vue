<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/images/logo.svg';
</script>
<template>
    <div class="logo text-center">
        <RouterLink to="/" class="logo-title">
            <img :src="logo" alt="home" />
        </RouterLink>
        <p class="login-text text-center">O‘zbeskiston Respublikasi Madaniyat vazirligi</p>
        <h4 class="login-title">ERP-MADANIYAT yagona boshqaruv tizimi</h4>
    </div>
    <!-- <div>
        <v-label class="mb-2 font-weight-medium text-left" for="runm">Username</v-label>
        <v-text-field
            variant="outlined"
            type="text"
            placeholder="Username"
            color="primary"
            id="runm"
        >  
            <template v-slot:append-inner>
                <UserIcon stroke-width="1.5" size="22"  class="text-medium-emphasis" />
            </template>
        </v-text-field>
        <v-label class="mb-2 font-weight-medium" for="rpwd">Password</v-label>
        <v-text-field
            variant="outlined"
            type="password"
            placeholder="Password"
            color="primary"
            id="rpwd"
        >  
            <template v-slot:append-inner>
                <LockIcon stroke-width="1.5" size="22" class="text-medium-emphasis" />
            </template>
        </v-text-field>
    </div> -->
</template>
<style lang="scss">
.logo {
    .login-text {
        color: #FFF; 
        text-align: left;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.64px;
        padding-bottom: 6px;
    }
    .login-title {
        color: #000810;
        text-align: left;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
        letter-spacing: 0.96px;
    }
}
</style>