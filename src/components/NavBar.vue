<template>
  <nav :class="['fixed top-0 left-0 w-full text-customTxtOrange dark:text-customTxtYellow animate-fadeIn', isScrolled ? 'bg-white dark:bg-black' : 'bg-transparent', 'z-50']">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo or Brand Name -->
      <div class="p-5">
        <RouterLink to="/">
          <h1 class="font-bold font-teko text-5xl">AA</h1>
        </RouterLink>
      </div>

      <!-- Hamburger Menu for Mobile View -->
      <div class="p-2">
        <label class="flex flex-col gap-2 w-8 md:hidden">
          <input class="peer hidden" type="checkbox" @click="isOpen = !isOpen" />
          <div class="rounded-2xl h-[3px] w-1/2 bg-customTxtOrange  dark:bg-customTxtYellow  duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div class="rounded-2xl h-[3px] w-full bg-customTxtOrange dark:bg-customTxtYellow duration-500 peer-checked:-rotate-45"></div>
          <div class="rounded-2xl h-[3px] w-1/2 bg-customTxtOrange dark:bg-customTxtYellow duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>
      </div>

      <!-- Nav Links for Desktop View -->
      <div class="hidden md:flex flex-1 text-center justify-center">
        <div class="inline-flex space-x-12 font-bold">
          <RouterLink to="/" class="relative hover:underline">Home</RouterLink>
          <RouterLink to="#about" class="relative hover:underline">About</RouterLink>
          <RouterLink to="#projects" class="relative hover:underline">Projects</RouterLink>
          <RouterLink to="/Alfie_Adrales_CV.pdf" target="_blank" class="hover:underline">Resume</RouterLink>
        </div>
      </div>

      <!-- Dark Mode Toggle for Desktop View -->

      <div class="hidden md:block">
        <label class="relative inline-flex items-center cursor-pointer">
          <input class="sr-only peer" type="checkbox" name="checkbox" @change="toggleDarkMode" :checked="darkMode" />
          <div class="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[2px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
        </label>
      </div>
    </div>

    <!-- Dropdown Menu for Mobile View -->
  <div v-if="isOpen" class="md:hidden">
    <div class="w-full font-bold bg-white dark:bg-black relative">
      <label class="absolute top-2 right-2 inline-flex items-center cursor-pointer">
        <input class="sr-only peer" type="checkbox" @change="toggleDarkMode" :checked="darkMode" />
        <div class="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[2px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
      </label>
      <div class="flex flex-col items-center space-y-4 py-4 text-customTxt dark:text-customBG">
        <a href="/" class="hover:underline">Home</a>
        <a href="#about" class="hover:underline">About</a>
        <a href="#projects" class="hover:underline">Projects</a>
        <a href="/Adrales - CV.pdf" target="_blank" class="hover:underline">Resume</a>
      </div>
    </div>
  </div>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const darkMode = ref(false);
const isOpen = ref(false);
const isScrolled = ref(false);

const toggleDarkMode = (event) => {
  darkMode.value = event.target.checked;
  document.documentElement.classList.toggle('dark', darkMode.value);
}

const handleScroll = () => {
  if (window.scrollY > 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

