<template>
    <section class="animate-fadeIn">
        <div class="parallax-bg flex flex-col md:flex-row justify-center items-center p-4 mt-28 space-y-4 md:space-y-8 md:space-x-12 bg-[url('@/assets/images/16.png')] bg-contain bg-center">
            <div class="flex flex-col md:w-[600px] md:text-left">
                <RouterLink to="/#projects"><v-icon name="bi-arrow-left-circle" scale="2" fill="#F5834D"/></RouterLink>
                <h1 class="font-teko mt-6 text-[#3874ff]" style="font-size: 50px;">Hail Cat Tool</h1>
                <p class="text-left text-lg mt-5 text-customTxt dark:text-customBG">This is another project that I developed along with two of my friends who work at VRT. We built it using PHP, Bootstrap, and Ajax, with my primary role being the backend developer. This experience not only enhanced my backend skills but also taught me how to set up OAuth with Microsoft and Gmail. It was a valuable learning opportunity that deepened my understanding of secure authentication methods and collaborative development.</p>
            </div>
    
            <div class="flex flex-col items-center">
                <img src="@/assets/images/Leapdemo/leapDemo_laptop.png " class="w-[500px] h-auto mx-auto">
            </div>
        </div>
    
    
        <div class="p-3">
            <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/Leapdemo/leapDemoHeader.png" class="w-full h-auto rounded-lg">
                </div>

                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/Leapdemo/leapDemoFooter.png" class="w-full h-auto rounded-lg">
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/Leapdemo/leapDemoAbout.png" class="w-full h-auto rounded-lg">
                </div>

                <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                    <img src="@/assets/images/Leapdemo/leapDemoAboutFooter.png" class="w-full h-auto rounded-lg">
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