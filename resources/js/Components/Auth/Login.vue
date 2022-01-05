<template>
    <div class="flex w-1/2 justify-center items-center bg-white">
        <form @submit.prevent="validateForm" class="bg-white" method="POST">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            <div class="my-2" v-if="loginFailed">
                <p class="text-red-500">The provided credentials do not match!</p>
            </div>
            <div :class="{ 'border-red-500' : form.errors.email }" class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input @focus="form.errors.email = false" v-model="username" class="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" />
            </div>
            <div :class="{ 'border-red-500' : form.errors.password }" class="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input @focus="form.errors.password = false" v-model="password" class="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <p class="mt-2">Don't have an account yet? <a @click="changeAuthType" class="text-blue-500 transition duration-150 hover:underline cursor-pointer">Register</a></p>
            <button :class="!canSubmit ? 'bg-indigo-200 cursor-not-allowed' : 'bg-indigo-600'" type="submit" class="block w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2">Login</button>
            <button @click.prevent="loginWithGoogleProvider" type="button" class="block bg-indigo-600 w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2">Login with google</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {logUserIn, logUserInGoogle} from "../../server/firebaseChat";

export default {
    name: "Login",

    data() {
        return {
            username: '',
            password: '',
            form: {
                errors: {
                    email: false,
                    password: false,
                },
                loginFailed: null,
            }
        }
    },

    computed: {
        hasEmail() {
            return this.username.length > 0;
        },

        hasPassword() {
            return this.password.length > 0;
        },

        canSubmit() {
            return this.hasEmail && this.hasPassword;
        },

        loginFailed() {
            return this.form.loginFailed === false;
        }
    },

    methods: {
        ...mapActions(['setCurrentUser', 'setAuthType', 'setCurrentUser']),

        async validateForm() {
            if(!this.hasEmail) {
                this.form.errors.email = true;
            }

            if(!this.hasPassword) {
                this.form.errors.password = true;
            }


            if(this.form.errors.password === true || this.form.errors.email === true) {
                return;
            }

            await this.loginProcess();
        },

        async loginProcess() {
            const response = await logUserIn(this.username, this.password);

            if (!response.user) {
                this.form.loginFailed = true
            }

            this.setCurrentUser({
                "username" : response.user.displayName,
                "email" : response.user.email,
                "phoneNumber" : response.user.phoneNumber,
                "profilePicture" : response.user.photoURL,
                "uid" : response.user.uid,
            });
        },

        changeAuthType() {
            this.setAuthType();
        },

        async loginWithGoogleProvider() {
            const response = await logUserInGoogle();
            if(!response.user) {
                this.form.loginFailed = true;
                return;
            }

            this.setCurrentUser(response.user);
        }
    },

}
</script>

<style scoped>

</style>