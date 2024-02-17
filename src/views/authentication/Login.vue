<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';

</script>
<template>
  <div class="auth-page">
    <div class="boxed-auth-wrap">
      <v-card rounded="xl" elevation="10" id="cardSettime" class="px-sm-1 px-0  mx-auto index-2">
        <v-card-item class="pa-sm-8">
            <div class="d-flex justify-center mb-5">
                <Logo />
            </div>
            <LoginForm />
            <!-- <h6 class="text-subtitle-1  text-grey100 d-flex justify-center align-center mt-3">
                New to Spike?
                <v-btn class="pl-0 text-primary text-body-1 opacity-1 pl-2" height="auto"
                    to="/auth/register2" variant="plain">Create an account</v-btn>
            </h6> -->
        </v-card-item>
      </v-card>
    </div>
  </div>

    <!-- <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" class="d-flex align-center">
                    <div class="boxed-auth-wrap">
                        <v-card rounded="xl" elevation="10" class="px-sm-1 px-0  mx-auto index-2">
                            <v-card-item class="pa-sm-8">
                                <div class="d-flex justify-center mb-5">
                                    <Logo />
                                </div>
                                <LoginForm />
                                <h6 class="text-subtitle-1  text-grey100 d-flex justify-center align-center mt-3">
                                    New to Spike?
                                    <v-btn class="pl-0 text-primary text-body-1 opacity-1 pl-2" height="auto"
                                        to="/auth/register2" variant="plain">Create an account</v-btn>
                                </h6>
                            </v-card-item>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div> -->
</template>
<style>
</style>
