<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        @click.self="$emit('close')"
      >
        <div class="relative bg-white rounded-xl shadow-2xl w-[90vw] max-w-4xl h-[76vh] md:h-[90vh] flex flex-col">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-5 py-3 border-b">
            <h2 class="text-2xl font-bold text-customTxt font-teko">Resume</h2>
            <div>
              <button
                @click="$emit('close')"
                class="text-gray-500 hover:text-gray-800 text-3xl leading-none"
              >
                &times;
              </button>
            </div>
          </div>

          <!-- PDF Viewer -->
          <div class="flex-1 w-full overflow-y-auto">
            <VuePdfEmbed source="/Alfie_Adrales_CV.pdf" />
          </div>

          <!-- Footer -->
          <div class="flex justify-end px-5 py-2 border-t border-black">
            <a
              href="/Alfie_Adrales_CV.pdf"
              download
              class="bg-customTxtOrange p-2 rounded-lg text-white font-poppins "
              v-tooltip="'Download'"
            >
              <v-icon name="bi-download" scale="1.2" style="stroke: currentColor; stroke-width: 1;" />
            </a>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed';

defineProps({
  isOpen: Boolean 
})
defineEmits(['close'])
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease; 
}
.fade-enter-from, .fade-leave-to { 
  opacity: 0; 
}
</style>