<script setup>
import { LockClosedIcon, TrashIcon, UserIcon } from '@heroicons/vue/24/solid'
import store from '../store';
import router from '../router';
import { ref } from 'vue';
let user = {
    email: '',
    password: '',
    rememberMe: false
}
let errorMsg = ref('');

function login(event) {
    event.preventDefault();
    store
        .dispatch('login', user)
        .then(() => {
            router.push({
                name: 'Dashboard'
            })
        }).catch((err) => {
            errorMsg.value = (err.response.data.errors) ? "Erreur interne ou utilisateur invalide." : err.response.data.error;
        })

}
</script>
<template>
    <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="mx-auto w-40 rounded-full  bg-indigo-500">
                <UserIcon class="w-40 text-white" />
            </div>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Connectez vous à votre
                compte</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit="login">
                <div v-if="errorMsg" class="flex items-center justify-between py-3 px-5 bg-pink-600 text-white rounded">
                    {{ errorMsg }}
                    <span @click="errorMsg = ''">
                        <TrashIcon
                            class="h-5 w-5 rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.47)] text-white" />
                    </span>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="mt-2">
                        <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required=""
                            class="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de Pass</label>
                    </div>
                    <div class="mt-2">
                        <input v-model="user.password" id="password" name="password" type="password"
                            autocomplete="current-password" required=""
                            class="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="lx yz">
                        <input v-model="user.rememberMe" id="rememberMe" name="rememberMe" type="checkbox"
                            class="nw rx adp afv ayh bnr rounded-3xl">
                        <label for="rememberMe" class="jw lu awa awp axt">Remember me</label>
                    </div>
                    <div class="text-sm">
                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Mot de Pass oublié?</a>
                    </div>
                </div>
                <div>
                    <button type="submit"
                        class="flex w-full items-center justify-center rounded-3xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <LockClosedIcon class="w-8" />
                        <span class="text-3xl">Se connecter</span>
                    </button>
                </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
                Vous n'avez pas de compte?
                {{ ' ' }}
            <router-link :to="{name: 'Register'}"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Créer un compte
                gratuitement</router-link>
        </p>
    </div>
</div></template>
