<template>
<section class="animate-fadeIn">
    <div class="parallax-bg flex flex-col md:flex-row justify-center items-center p-4 mt-28 space-y-4 md:space-y-8 md:space-x-12 bg-[url('@/assets/images/16.png')] bg-contain bg-center">
        <div class="flex flex-col md:w-[600px] md:text-left">
            <RouterLink to="/#projects"><v-icon name="bi-arrow-left-circle" scale="2" fill="#F5834D"/></RouterLink>
            <h1 class="font-teko mt-6 text-[#1976d2]" style="font-size: 50px;">Appointment System</h1>
            <p class="text-left text-lg mt-5 text-customTxt dark:text-customBG">This appointment system was a project I developed while working at VRT Systems Corporation. I used the Quasar Framework (Vue) for the front-end and the Laravel Framework for the backend. It includes basic CRUD operations along with the integration of charts, a calendar, and a date/time picker. Thanks to this project, I became familiar with Vue and Laravel, and it significantly enhanced my skills in full-stack development.</p>
        </div>

        <div class="flex flex-col items-center">
            <img src="@/assets/images/AS_ss/AS_computer.png " class="w-[350px] h-auto mx-auto">
        </div>
    </div>

    <div class="flex flex-col justify-center items-center mt-12">
        <p class="text-sm text-customTxt dark:text-customBG mb-2" >
            Switch to <span class="font-bold">{{ isAdmin ? 'User' : 'Admin' }}</span>
        </p>
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="isAdmin" @change="toggleUserType" class="sr-only peer">
            <div class="peer
                ring-0 bg-customTxtYellow 
                rounded-full
                outline-none
                duration-300
                w-12 h-12 
                shadow-md
                peer-checked:bg-customTxtOrange 
                peer-focus:outline-none 
                flex justify-center items-center
                relative">
                <!-- Conditionally render the icon here -->
                <v-icon 
                    :name="isAdmin ? 'ri-admin-fill' : 'fa-user-friends'"
                    scale="1.5" animation="ring"
                />
            </div>
        </label>
        <h1 class="text-lg text-customTxt dark:text-customBG font-bold mt-2">{{ userType }}</h1>
    </div>

    <div class="p-3" v-if="isAdmin">
        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/AdminDash.png" class="w-full h-auto rounded-lg">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/AdminCalendar.png" class="w-full h-auto rounded-lg">
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/AdminUsers.png" class="w-full h-auto rounded-lg">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/AdminAppointments.png" class="w-full h-auto rounded-lg">
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/AdminApproved.png" class="w-full h-auto rounded-lg">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/AdminCancel.png" class="w-full h-auto rounded-lg">
            </div>
        </div>
    </div>

    <div class="p-3" v-else>
        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/UserDash.png" class="w-full h-auto rounded-lg">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/AS_ss/UserAppointments.png" class="w-full h-auto rounded-lg">
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue';

const isAdmin = ref(true);
const userType = ref('Admin');

const toggleUserType = () =>{
    userType.value = isAdmin.value ? 'Admin' : 'User';
};
</script>

<style>
.parallax-bg {
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
}
</style>