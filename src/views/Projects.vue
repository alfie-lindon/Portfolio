<template>
<!-- Projects Section -->
    <div data-aos="fade-up" id="projects" class="mt-64">
        <h1 class="text-customTxtOrange dark:text-customTxtYellow text-center font-teko font-bold" style="font-size: 50px;">PROJECTS</h1>
        <p class="text-center text-customTxt dark:text-customBG text-lg">Take a look at some of the projects that I'm proud of:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
            <!-- ERP -->
            <div class="flex items-center gap-6 bg-white rounded-xl p-4 border shadow-md">
                <div class="flex-shrink-0">
                    <img 
                    src="@/assets/images/Erpnext/erp_laptop.png" 
                    alt="erp_laptop" 
                    class="w-[100px] md:w-[230px] h-auto"
                    loading="lazy"
                    >
                </div>
                <div class="flex flex-col">
                    <h4 class="text-customTxt font-bold mb-2">ERPNext</h4>
                    <p class="text-sm text-gray-600 pb-3">
                    ERPNext system using frappe framework
                    </p>
                    <RouterLink 
                    to="/erp" 
                    class="font-bold text-customTxtOrange dark:text-customTxtYellow mt-2 hover:underline"
                    >
                    View Project →
                    </RouterLink>
                </div>
            </div>
            <!-- Appointment -->
            <div class="flex items-center gap-6 bg-white rounded-xl p-4 border shadow-md">
                <div class="flex-shrink-0">
                    <img 
                    src="@/assets/images/AS_ss/AS_computer.png" 
                    alt="appointment_laptop" 
                    class="w-[100px] md:w-[230px] h-auto"
                    loading="lazy"
                    >
                </div>
                <div class="flex flex-col">
                    <h4 class="text-customTxt font-bold mb-2">Appointment System</h4>
                    <p class="text-sm text-gray-600 pb-3">
                    Carbon Department Appointment Booking for car parts
                    </p>
                    <RouterLink 
                    to="/appointment-system" 
                    class="font-bold text-customTxtOrange dark:text-customTxtYellow mt-2 hover:underline"
                    >
                    View Project →
                    </RouterLink>
                </div>
            </div>
            <!-- CCMF -->
            <div class="flex items-center gap-6 bg-white rounded-xl p-4 border shadow-md">
                <div class="flex-shrink-0">
                    <img 
                    src="@/assets/images/CCMF/CCMF_tablet.png" 
                    alt="ccmf_laptop" 
                    class="w-[100px] md:w-[230px] h-auto"
                    loading="lazy"
                    >
                </div>
                <div class="flex flex-col">
                    <h4 class="text-customTxt font-bold mb-2">Scholarship Management System</h4>
                    <p class="text-sm text-gray-600 pb-3">
                    Consuelo Chito Madrigal Foundation Scholarship Management System.
                    </p>
                    <RouterLink 
                    to="/ccmf" 
                    class="font-bold text-customTxtOrange dark:text-customTxtYellow mt-2 hover:underline"
                    >
                    View Project →
                    </RouterLink>
                </div>
            </div>

            <!-- Leap Demo -->
            <div class="flex items-center gap-6 bg-white rounded-xl p-4 border shadow-md">
                <div class="flex-shrink-0">
                    <img 
                    src="@/assets/images/Leapdemo/leapDemo_laptop.png" 
                    alt="leapdemo" 
                    class="w-[100px] md:w-[230px] h-auto"
                    loading="lazy"
                    >
                </div>
                <div class="flex flex-col">
                    <h4 class="text-customTxt font-bold mb-2">Hail Cat Tool</h4>
                    <p class="text-sm text-gray-600 pb-3">
                    A risk awareness about hail risk and hail cat tool.
                    </p>
                    <RouterLink 
                    to="/hct" 
                    class="font-bold text-customTxtOrange dark:text-customTxtYellow mt-2 hover:underline"
                    >
                    View Project →
                    </RouterLink>
                </div>
            </div>

            <!-- Zyone -->
            <div class="flex items-center gap-6 bg-white rounded-xl p-4 border shadow-md">
                <div class="flex-shrink-0">
                    <img 
                    src="@/assets/images/Zyone/Zyone_computer.png" 
                    alt="zyone_laptop" 
                    class="w-[100px] md:w-[230px] h-auto"
                    loading="lazy"
                    >
                </div>
                <div class="flex flex-col">
                    <h4 class="text-customTxt font-bold mb-2">Zyone Gym Equipment</h4>
                    <p class="text-sm text-gray-600 pb-3">
                    A gym equipment E-commerce website submitted as a project in school.
                    </p>
                    <RouterLink 
                    to="/zyone" 
                    class="font-bold text-customTxtOrange dark:text-customTxtYellow mt-2 hover:underline"
                    >
                    View Project →
                    </RouterLink>
                </div>
            </div>

            <!-- 3G -->
            <div class="flex items-center gap-6 bg-white rounded-xl p-4 border shadow-md">
                <div class="flex-shrink-0">
                    <img 
                    src="@/assets/images/3G/3G_laptop.png" 
                    alt="3g_laptop" 
                    class="w-[100px] md:w-[230px] h-auto"
                    loading="lazy"
                    >
                </div>
                <div class="flex flex-col">
                    <h4 class="text-customTxt font-bold mb-2">3G HR Managment System</h4>
                    <p class="text-sm text-gray-600 pb-3">
                    This sub-system is part of a super system of our group project.
                    </p>
                    <span class="font-bold text-customTxtOrange dark:text-customTxtYellow mt-2">
                    View Project →
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
    

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init({duration: 1000});
});
</script>
