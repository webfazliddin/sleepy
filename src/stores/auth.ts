import { defineStore } from 'pinia';
import { router } from '@/router';
import AccountService from '@/services/other/account.service';
// import ApiService from '@/services/api.service';
import { ref } from 'vue';
const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

interface IState {
    user: any;
    returnUrl: string | null;
}

const parseLocalStorage = (key: string) => {
    let data = null;
    try {
        const storage = localStorage.getItem(key);
        if (typeof data != null) {
            data = JSON.parse(JSON.stringify(storage)) || null;
        }
    } catch (e) {
        throw new Error(`found unspecified error: ${e}`);
    }

    return data;
};
export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        user: parseLocalStorage('user'),
        token: parseLocalStorage('token'),
        returnUrl: null
        // generatetoken: ''
    }),

    actions: {
        // login(username: string, password: string) {
        //     AccountService.Login({ username, password }).then((res) => {
        //         this.token = res.data.token;
        //         localStorage.setItem('token', res.data.token);

        //         // router.push(this.returnUrl || '/');
        //     });
        //     // AccountService.SignIn({ username, password }).then((res) => {
        //     //     this.user = res.data.userinfo;
        //     //     // this.token = generatetoken;
        //     //     // store user details and jwt in local storage to keep user logged in between page refreshes
        //     //     localStorage.setItem('user', JSON.stringify(res.data.userinfo));
        //     //     localStorage.setItem('auth_token', this.token);
        //     //     ApiService.setHeader()
        //     //     // redirect to previous url or default to home page
        //     //     // router.push(this.returnUrl || '/dashboard1');
        //     //     router.push(this.returnUrl || '/');
        //     // });

        //     // update pinia state
        // },
        logout() {
            AccountService.Logout()
                .then((res) => {
                    this.user = null;
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    router.push('/');
                    window.location.reload();
                })
                .catch(() => {});
        }
    }
});
