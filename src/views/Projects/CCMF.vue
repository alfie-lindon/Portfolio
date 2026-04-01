<template>
    <section class="animate-fadeIn">
        <div class="parallax-bg flex flex-col md:flex-row justify-center items-center p-4 mt-28 space-y-4 md:space-y-8 md:space-x-12 bg-[url('@/assets/images/16.png')] bg-contain bg-center">
            <div class="flex flex-col md:w-[600px] md:text-left">
                <RouterLink to="/#projects"><v-icon name="bi-arrow-left-circle" scale="2" fill="#F5834D"/></RouterLink>
                <h1 class="font-teko mt-6 text-[#19db93]" style="font-size: 50px;">Scholarship Management System</h1>
                <p class="text-left text-lg mt-5 text-customTxt dark:text-customBG">This was our graduating capstone system, developed for the Consuelo Chito Madrigal Foundation. We built this system using PHP, Bootstrap, and JavaScript. My role was the back-end developer, where I spent a significant amount of time creating the system's functions and features. This project was a challenging yet rewarding experience that honed my problem-solving skills and deepened my understanding of back-end development. It also taught me the importance of teamwork and effective communication in successfully delivering a project.</p>
            </div>
    
            <div class="flex flex-col items-center">
                <img src="@/assets/images/CCMF/CCMF_tablet.png " class="w-[500px] h-auto mx-auto">
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
                    <img src="@/assets/images/CCMF/CCMF_AdminDash.png" class="w-full h-auto rounded-lg">
                </div>
    
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_AdminScholar.png" class="w-full h-auto rounded-lg">
                </div>
            </div>
    
            <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_AdminScholarApp.png" class="w-full h-auto rounded-lg">
                </div>
    
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_AdminRenew.png" class="w-full h-auto rounded-lg">
                </div>
            </div>
    
            <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_AdminInt.png" class="w-full h-auto rounded-lg">
                </div>
    
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_AdminAnnounce.png" class="w-full h-auto rounded-lg">
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_AdminAccs.png" class="w-full h-auto rounded-lg">
                </div>
    
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_AdminLogs.png" class="w-full h-auto rounded-lg">
                </div>
            </div>
        </div>
    
        <div class="p-3" v-else>
            <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_Scholar.png" class="w-full h-auto rounded-lg">
                </div>
    
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/CCMF/CCMF_ScholarInfo.png" class="w-full h-auto rounded-lg">
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                <img src="@/assets/images/CCMF/CCMF_ScholarFiles.png" class="w-[700px] h-auto rounded-lg">
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