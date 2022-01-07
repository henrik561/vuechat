<template>
    <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white" @submit.prevent="registerUser" method="POST">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">Welcome to vueChat</h1>
            <div :class="hasEmail ? hasValidEmail ? 'border-green-500' : 'border-red-500' : ''"  class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input v-model="email" class="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" />
            </div>
            <div :class="hasPassword ? passwordsDoMatch ? 'border-green-500' : 'border-red-500' : ''" class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input v-model="password" class="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div :class="hasPassword ? passwordsDoMatch ? 'border-green-500' : 'border-red-500' : ''" class="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input v-model="password_repeat" class="pl-2 outline-none border-none" type="password" name="password" id="password-repeat" placeholder="Password Repeat" />
            </div>
            <p class="mt-2">Already have an account? <a @click="changeAuthType" class="text-blue-500 transition duration-150 hover:underline cursor-pointer">Login</a></p>
            <button :class="!canSubmit ? 'bg-indigo-200 cursor-not-allowed' : 'bg-indigo-600'" type="submit" class="block w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2">Register</button>
            <button @click.prevent="loginWithGoogleProvider" type="button" class="block bg-indigo-600 w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2">Login with google</button>
        </form>
    </div>
</template>

<script>

import {mapActions} from 'vuex';
import {createUser, logUserInGoogle} from "../../server/firebaseChat";

export default {
    name: "Register",

    data() {
        return {
            email: '',
            password: '',
            password_repeat: '',
            loggedIn: false,
            form_errors: false,
            canRegister: false,
        }
    },

    computed: {
        passwordsDoMatch() {
            return this.password === this.password_repeat;
        },

        hasPassword() {
            return this.canRegister = this.password.length > 0;
        },

        hasEmail() {
            return this.canRegister = this.email.length > 0;
        },

        canSubmit() {
            return this.hasEmail && this.hasPassword;
        },

        hasValidEmail() {
            const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            return this.canRegister = this.email.match(regex) && this.email.length > 6;
        }

    },

    methods: {
        ...mapActions(['setCurrentUser', 'setAuthType', 'setCurrentUser']),

        async registerUser() {
            if(this.canRegister) {
                const response = await createUser(this.email, this.password);

                if(!response.user) {
                    this.form.loginFailed = true
                }

                this.setCurrentUser({
                    "username" : response.user.displayName,
                    "email" : response.user.email,
                    "phoneNumber" : response.user.phoneNumber,
                    "profilePicture" : response.user.photoURL,
                    "uid" : response.user.uid,
                })
            }
        },

        changeAuthType() {
            this.setAuthType()
        },

        async loginWithGoogleProvider() {
            const response = await logUserInGoogle();

            if(!response.user) {
                this.form_errors = true;
                return;
            }

            this.setCurrentUser(response.user);
        }
    }
}
</script>

<style scoped>

</style>