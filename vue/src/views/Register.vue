<script setup>
import { LockClosedIcon, UserPlusIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router';
import store from '../store';

const router = useRouter();
const user = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: ''
}
function register(event) {
    event.preventDefault();
    store
        .dispatch('register', user)
        .then(() => {
            router.push({ name: 'Dashboard' })
        })
}
</script>
<template>
    <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="mx-auto w-40  rounded-full  bg-indigo-500">
                    <UserPlusIcon  class="w-40 text-white" />
                </div>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Créer un compte
                gratuitement</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit="register">
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                    <div class="mt-2">
                        <input v-model="user.name" id="name" name="name" type="text" autocomplete="nom" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="surname" class="block text-sm font-medium leading-6 text-gray-900">Prenom</label>
                    <div class="mt-2">
                        <input v-model="user.surname" id="surname" name="surname" type="text" autocomplete="prenom"
                            required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="mt-2">
                        <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Téléphone</label>
                    </div>
                    <div class="mt-2">
                        <input v-model="user.phone" id="phone" name="phone" type="text" autocomplete="telephone" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de Pass</label>
                    </div>
                    <div class="mt-2">
                        <input v-model="user.password" id="password" name="password" type="password"
                            autocomplete="current-password" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password_confirmation"
                            class="block text-sm font-medium leading-6 text-gray-900">Confirmez votre mot de passe</label>
                    </div>
                    <div class="mt-2">
                        <input v-model="user.password_confirmation" id="password_confirmation" name="password_confirmation"
                            type="password" autocomplete="current-password" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Créer
                        un compte</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
            Vous avez déja un compte?
            {{ ' ' }}
            <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Se
                connecter</router-link>
        </p>
    </div>
</div></template>


<style scoped></style>