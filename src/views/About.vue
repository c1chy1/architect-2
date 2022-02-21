<template>
  <section class="about">
    <Splide id="splide" :options="{
      autoplay: false,
      rewind: false,
      height: '92vh',
      speed: 1000,
      focus     : 'center',
      pagination: 'slider',
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      flickPower: 600,
      trimSpace: 'move',
  }">
      <SplideSlide>
        <img
            v-lazy="{src: `${require('../assets/slider/01_office.jpg')}`}"
            alt="Sample 1"
            class=" h-full w-full mx-auto">

        <Hero/>

      </SplideSlide>
      <SplideSlide>
        <img
            v-lazy="{src: `${require('../assets/slider/02_office.jpg')}`}"
            alt="Sample 2"
            class=" h-full w-full mx-auto">
      </SplideSlide>
      <SplideSlide>
        <img
             v-lazy="{src: `${require('../assets/slider/03_office.jpg')}`}"
             alt="Sample 3"
             class="h-full w-full mx-auto">
      </SplideSlide>
      <SplideSlide>
        <img
            v-lazy="{src: `${require('../assets/slider/04_office.jpg')}`}"
            alt="Sample 4"
             class="h-full w-full mx-auto">
      </SplideSlide>
      <SplideSlide>
        <img v-lazy="{src: `${require('../assets/slider/05_office.jpg')}`}" alt="Sample 5"
             class="h-full w-full  mx-auto">
      </SplideSlide>
    </Splide>
    <Workers/>
    <ToTop/>
    <Footer/>
  </section>
</template>

<script>

import {Splide, SplideSlide} from '@splidejs/vue-splide';
import {defineComponent} from "vue";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Workers from "../components/Workers";
import ToTop from "../components/ToTop";


export default defineComponent({
  name: 'Home',


  props: ['showNavbar'],


  components: {
    Splide,
    SplideSlide,
    Workers,
    Footer,
    ToTop,
    Hero

  },

  beforeMount() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },

});


</script>

<style scoped lang="scss">

@import url("https://use.typekit.net/zsm0hjd.css");

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}


</style>
