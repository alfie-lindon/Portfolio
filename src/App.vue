<template>
    <NavBar/>
    <RouterView/>
    <Footer/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { addIcons } from 'oh-vue-icons';
import { BiFileEarmarkPerson, FaRegularIdCard, ViFileTypeHtml, 
        ViFileTypeCss, FaBootstrap, BiLinkedin, FaUserFriends, 
        RiAdminFill, OiPaperAirplane, CoBuyMeACoffee, BiDownload,
        CoJavascript, ViFileTypePhp, CoLaravel, ViFileTypeMysql, 
        BiGithub, ViFileTypeLightQuasar, BiFacebook, BiArrowLeftCircle, 
        MdEmailOutlined, CoReact, CoUbuntu, CoCanva, FaFigma, ViFileTypePhotoshop, 
        SiAdobeillustrator, ViFileTypeVue, ViFileTypeNode, ViFileTypeTailwind, 
        RiInstagramFill, BiXCircle, GiHamburgerMenu, ViFileTypePython, CoNextJs, ViFileTypeTypescript  } from 'oh-vue-icons/icons';

addIcons(BiFileEarmarkPerson, FaRegularIdCard, ViFileTypeHtml, 
        ViFileTypeCss, FaBootstrap, BiLinkedin, FaUserFriends, 
        RiAdminFill, OiPaperAirplane, CoBuyMeACoffee, BiDownload,
        CoJavascript, ViFileTypePhp, CoLaravel, ViFileTypeMysql, 
        BiGithub, ViFileTypeLightQuasar, BiFacebook, BiArrowLeftCircle, 
        MdEmailOutlined, CoReact, CoUbuntu, CoCanva, FaFigma, ViFileTypePhotoshop, 
        SiAdobeillustrator, ViFileTypeVue, ViFileTypeNode,ViFileTypeTailwind, 
        RiInstagramFill, BiXCircle, GiHamburgerMenu, ViFileTypePython, CoNextJs, ViFileTypeTypescript );
</script>