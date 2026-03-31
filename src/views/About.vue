<template>
<div id="about" class="mt-80">
    <div data-aos="fade-right" class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-8 md:space-x-12">
        <div class="w-full md:w-[600px] md:text-left p-5">
            <h1 class="font-teko font-bold text-customTxtOrange dark:text-customTxtYellow" style="font-size: 50px;">ABOUT <span class="text-customTxt dark:text-customBG">ME</span></h1>
            <p class="text-lg mt-2 text-customTxt dark:text-customBG">
                A passionate web developer and programmer with a strong interest in graphic design and computer components. My journey in tech is driven by a love for gaming and a desire to become a game developer. With a solid foundation in programming and a willingness to continually learn and adapt, I’m dedicated to creating impactful web solutions and exploring new technologies.
            </p>

            <p class="mt-2 text-lg text-center text-customTxt dark:text-customBG">Current technologies that I've been learning recently:</p>
            
            <div class="flex flex-wrap justify-center items-center space-x-2 md:space-x-4 mt-3">
                <div
                    v-for="item in currentSubItem"
                    :key="item.name"
                    class="flex flex-col justify-center items-center cursor-pointer bg-customTxtYellow p-2 rounded-lg w-24 h-16 hover:animate-bounceOnce"
                >
                    <v-icon :name="item.icon" :scale="item.scale" />
                    <span class="text-center">{{item.name}}</span>
                </div>
            </div>
            
        </div>

        <div class="flex flex-col items-center">
            <div class="relative w-full group">
                <div class="relative
                            z-40
                            cursor-pointer
                            group-hover:-translate-x-8
                            group-hover:shadow-2xl
                            group-hover:-translate-y-8
                            transition-all
                            duration-500
                            flex items-center
                            justify-center
                            h-72 w-72
                            mx-auto rounded-xl">

                    <img src="../assets/images/gradpic.jpg" alt="Graduation Picture" class="rounded-xl" loading="lazy" />
                </div>
                <div class="absolute
                            opacity-0
                            group-hover:opacity-80
                            transition-all
                            duration-300
                            inset-0 z-30
                            bg-customTxtOrange
                            dark:bg-customTxtYellow
                            flex items-center
                            justify-center
                            h-72 w-72
                            mx-auto rounded-xl">
                </div>
            </div>
        </div>
    </div>

    <div data-aos="fade-left" class="flex flex-col md:flex-row justify-center items-center mt-24 p-4 md:space-y-8 md:space-x-4">
        <div class="flex flex-wrap justify-center gap-4 md:w-[500px]">
            <div
                v-for="item in existingSubItem"
                :key="item.name"
                class="flex flex-col justify-center items-center cursor-pointer bg-customTxtYellow p-2 rounded-lg w-20 h-14 hover:animate-bounceOnce"
            >
                <v-icon :name="item.icon" :scale="item.scale" :fill="item.fill" />
                <span :style="{ color: item.color }" class="text-sm">{{ item.name }}</span>
            </div>
        </div>

        <div class="md:w-[500px] md:text-right mt-10">
            <h1 class="font-teko font-bold text-customTxtOrange dark:text-customTxtYellow" style="font-size: 50px;">SKILLS <span class="text-customTxt dark:text-customBG">&</span> TECHNOLOGIES</h1>
            <p class="text-lg mt-2 text-customTxt dark:text-customBG">
                Throughout my academic year and various simple projects, I have developed proficiency in a range of skills and technologies. I've also gained hands-on experience with responsive design, animation techniques, and user interface design principles. This skill set has enabled me to tackle complex challenges and continuously improve my projects.
            </p>
        </div>
    </div>

</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { currentSubItem } from '@/boot/currentSkillsList';
import { existingSubItem } from '@/boot/existingSkillsList';
import Aos from 'aos';
import 'aos/dist/aos.css'

onMounted(() => {
  Aos.init({ duration: 1000 });
});

</script>