<template>
    <Introduction />
    <About />
    <Projects />

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
</template>

<script setup>
import { ref } from 'vue';
import Introduction from './Introduction.vue';
import Projects from './Projects.vue';
import About from './About.vue';
import Contact from './Contact.vue';

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};
</script>