<template>
<!-- Projects Section -->
    <div data-aos="fade-up" id="projects" class="mt-64">
        <h1 class="text-customTxtOrange dark:text-customTxtYellow text-center font-teko font-bold" style="font-size: 50px;">PROJECTS</h1>
        <p class="text-center text-customTxt dark:text-customBG text-lg">Take a look at some of the projects that I'm proud of:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
            <div
                v-for="item in projectsItem"
                :key="item.name"
                class="flex items-center gap-6 bg-white rounded-xl p-4 border shadow-md"
            >
                <div class="flex-shrink-0">
                <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-[100px] md:w-[230px] h-auto"
                    loading="lazy"
                />
                </div>
                <div class="flex flex-col">
                <h4 class="text-customTxt font-bold mb-2">{{ item.name }}</h4>
                <p class="text-sm text-gray-600 pb-3">{{ item.description }}</p>
                <RouterLink
                    :to="item.route"
                    class="font-bold text-customTxtOrange dark:text-customTxtYellow mt-2 hover:underline"
                >
                    View Project →
                </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
    

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectsItem } from '@/boot/projectsList';

onMounted(() => {
    AOS.init({duration: 1000});
});
</script>
