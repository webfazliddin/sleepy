<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';

/*Social icons*/
import profile from '@/assets/images/svgs/profile-circle.svg';

const checkbox = ref(false);
const valid = ref(false);
const show2 = ref(false);
const  username= ref('admin');
const password = ref('rux');
const passwordRules = ref([
    (v: string) => !!v || 'Parolni kiriting',
]);
const login = ref([(v: string) => !!v || 'Loginni kiriting']);
const savePasswordRules = ref([(v:any) => !!v || 'Davom etish uchun rozi bo`lishingiz kerak!']);

function validate(values: any, { setErrors }: any) {
    const authStore = useAuthStore();
    return authStore.login(username.value, password.value).catch((error) => setErrors({ message: '' }));
}
</script>
<template>
   <Form @submit="validate" v-slot="{ errors, isSubmitting }" >
        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-grey200">LOGIN</v-label>
        <VTextField
            v-model="username"
            :rules="login"
            class="mb-8"
            placeholder="Loginni kiriting"
            required
            hide-details="auto"
        >
        <template v-slot:append-inner>
            <img :src="profile" alt="">
         
        </template>
        </VTextField>
        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-grey200">PAROL</v-label>
        <VTextField
            v-model="password"
            :rules="passwordRules"
            required
            :type="show2 ? 'text' : 'password'"
            hide-details
            :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show2 = !show2"
            class="pwdInput"
            placeholder="Parolni kiriting"
        >
         
        </VTextField>
        <div class="d-flex flex-wrap align-center my-3 ml-n2">
            <v-checkbox v-model="checkbox" :rules="savePasswordRules" required hide-details color="primary">
                <template v-slot:label>Eslab qolish</template>
            </v-checkbox>
        </div>
        <v-btn class="text-white" size="large" :loading="isSubmitting" color="#006A60" :disabled="valid" block type="submit" flat>Kirish</v-btn>
        <div v-if="errors.message" class="mt-2">
            <v-alert color="error">{{ errors.message }}</v-alert>
        </div>
    </Form>
</template>
