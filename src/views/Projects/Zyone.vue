<template>
  <section class="animate-fadeIn">
      <div class="parallax-bg flex flex-col md:flex-row justify-center items-center p-4 mt-28 space-y-4 md:space-y-8 md:space-x-12 bg-[url('@/assets/images/16.png')] bg-contain bg-center">
          <div class="flex flex-col md:w-[600px] md:text-left">
              <RouterLink to="/#projects"><v-icon name="bi-arrow-left-circle" scale="2" fill="#F5834D"/></RouterLink>
              <h1 class="font-teko mt-6 text-[#0d536c]" style="font-size: 50px;">Zyone Gym Equipment</h1>
              <p class="text-left text-lg mt-5 text-customTxt dark:text-customBG">This project was my first e-commerce website, which I created as a school project during my third year. It introduced me to Bootstrap for responsive design and payment integration using PayPal. Through this project, I gained valuable experience in building user-friendly interfaces and handling secure online transactions. It also sparked my interest in e-commerce development, motivating me to explore more advanced web development techniques. Overall, this project laid the foundation for my future work in web development.</p>
          </div>
  
          <div class="flex flex-col items-center">
              <img src="@/assets/images/Zyone/Zyone_computer.png " class="w-[350px] h-auto mx-auto">
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
  
      <div class="flex justify-center p-3" v-if="isAdmin">
        <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
            <img src="@/assets/images/Zyone/ZyoneAdmin.png" class="w-full h-auto rounded-lg">
        </div>
      </div>
  
      <div class="mt-5 p-3" v-else>
        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/Zyone/ZyoneIndex.png" class="w-full h-auto rounded-lg">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/Zyone/ZyoneContact.png" class="w-full h-auto rounded-lg">
            </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/Zyone/ZyoneCart.png" class="w-full h-auto rounded-lg">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-auto shadow-lg rounded-xl">
                <img src="@/assets/images/Zyone/ZyoneLogin.png" class="w-full h-auto rounded-lg">
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