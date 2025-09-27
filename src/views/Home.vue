<template>
    <div class="flex flex-col md:flex-row w-full justify-center items-center mt-48">
        <!-- Left Column -->
        <div class="w-full md:w-[600px] text-center md:text-left">
            <p class=" text-lg font-thin text-customTxt dark:text-customBG">Hi, I'm Alfie Lindon Adrales</p>
            <h1 class="font-teko font-bold mt-6 text-customTxtOrange dark:text-customTxtYellow" style="font-size: 50px;">A <span class="text-customTxt dark:text-customBG">Web Developer</span> <br> crafting digital experiences from the Metro.</h1>
            <p class="text-lg mt-6 text-customTxt dark:text-customBG">
                I’m a web developer/programmer with basic knowledge in graphic designing and computer components, and I'm passionate about learning new technologies to enhance my skills.
            </p>

            <div class="flex justify-center md:justify-start space-x-4 mt-5">
                <a href="#about" class=" btn group flex items-center justify-start w-11 h-11 bg-customTxtOrange dark:bg-customTxtYellow rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-52 hover:rounded-lg active:translate-x-1 active:translate-y-1">
                <div class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                    <v-icon name="fa-regular-id-card" scale="1.5" />
                </div>
                <div class="absolute right-5 transform translate-x-full opacity-0 text-customTxt text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    More about me
                </div>
                </a>

                <a href="/Adrales - CV.pdf" target="_blank" class=" btn group flex items-center justify-start w-11 h-11 bg-customTxtOrange dark:bg-customTxtYellow rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-52 hover:rounded-lg active:translate-x-1 active:translate-y-1">
                <div class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                    <v-icon name="bi-file-earmark-person" scale="1.5" />
                </div>
                <div class="absolute right-5 transform translate-x-full opacity-0 text-customTxt text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    View my resume
                </div>
                </a>
            </div>
        </div>

        <!-- Right Column -->
        <div class="md:w-[600px] flex flex-col items-center">
            <lottie-player src="https://lottie.host/ce8c689d-4c34-4c7d-8d93-1d796c952b26/m3dDhawLXc.json" background="transparent" speed="1" class="w-auto md:w-[600px] h-auto" loop autoplay></lottie-player>
        </div>
    </div>

    <!-- Button that sticks to the right middle side of the screen -->
    <button @click="toggleDrawer" aria-label="Email Drawer" class="fixed right-0 top-1/2 transform -translate-y-1/2 bg-customTxtOrange dark:bg-customTxtYellow text-white p-1 md:p-3 rounded-l-lg shadow-lg hover:bg-orange-500 dark:hover:bg-yellow-500 transition duration-300 z-50">
        <v-icon name="md-email-outlined" scale="2" animation="ring" fill="#50413C" />
    </button>

    <!-- Drawer that slides in -->
    <transition enter-active-class="transform transition-transform ease-in-out duration-300"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition-transform ease-in-out duration-300"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
    >
        <div v-if="isDrawerOpen" class="fixed inset-y-0 right-0 w-[400px] h-screen bg-white dark:bg-black shadow-lg p-4 overflow-y-auto z-50">
            <button @click="toggleDrawer" class="absolute top-4 right-4">
                <v-icon name="bi-x-circle" scale="2" fill="#F5834D"/>
            </button>
            <Contact />
        </div>
    </transition>

    <!-- About Section -->
    <About />

    <!-- Projects Section -->
    <Projects />
</template>

<script setup>
import { ref } from 'vue';
import Projects from './Projects.vue';
import About from './About.vue';
import Contact from './Contact.vue';

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};
</script>