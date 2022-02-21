<template>
  <section id="home">
    <Splide id="splide"
            :options="options">
      <SplideSlide class="flex">
        <img

            v-lazy="{src: `${require('../assets/slider/01_home.jpg')}`}" alt="Sample 1"
            class="h-full lg:w-11/12 mx-auto shadow-img relative">
          <router-link class="absolute  bottom-4 left-0 lg:right-20 lg:bottom-8 lg:left-auto  py-3 px-3 md:py-5 md:px-5  lg:mt-4 lg:py-4 lg:px-8  bg-primary bg-opacity-70 text-fourth text-2xl hover:text-orange" to="/projektNr1">
            Projekt Nr.1
          </router-link>

        <Card/>
      </SplideSlide>
      <SplideSlide>
        <img
            v-lazy="{src: `${require('../assets/slider/02_home.jpg')}`}" alt="Sample 2"
            class="h-full lg:w-11/12 mx-auto shadow-img">
        <router-link class="absolute  bottom-4 left-0 lg:right-20 lg:bottom-8 lg:left-auto  py-3 px-3 md:py-5 md:px-5  lg:mt-4 lg:py-4 lg:px-8  bg-primary bg-opacity-70 text-fourth text-2xl hover:text-orange" to="/projektNr2">
          Projekt Nr.2
        </router-link>
      </SplideSlide>
      <SplideSlide>
        <img  v-lazy="{src: `${require('../assets/slider/03_home.jpg')}`}" alt="Sample 3"
             class="h-full  lg:w-11/12 mx-auto shadow-img">
        <router-link class="absolute  bottom-4 left-0 lg:right-20 lg:bottom-8 lg:left-auto  py-3 px-3 md:py-5 md:px-5  lg:mt-4 lg:py-4 lg:px-8  bg-primary bg-opacity-70 text-fourth text-2xl hover:text-orange" to="/projektNr3">
          Projekt Nr.3
         </router-link>
      </SplideSlide>
      <SplideSlide>
        <img  v-lazy="{src: `${require('../assets/slider/04_home.jpg')}`}" alt="Sample 4"
             class="h-full  lg:w-11/12 mx-auto shadow-img">
        <router-link class="absolute  bottom-4 left-0 lg:right-20 lg:bottom-8 lg:left-auto  py-3 px-3 md:py-5 md:px-5  lg:mt-4 lg:py-4 lg:px-8  bg-primary bg-opacity-70 text-fourth text-2xl hover:text-orange" to="/projektNr4">
          Projekt Nr.4
         </router-link>
      </SplideSlide>
      <SplideSlide>
        <img  v-lazy="{src: `${require('../assets/slider/05_home.jpg')}`}" alt="Sample 5"
             class="h-full lg:w-11/12 mx-auto shadow-img">
        <router-link class="absolute  bottom-4 left-0 lg:right-20 lg:bottom-8 lg:left-auto  py-3 px-3 md:py-5 md:px-5  lg:mt-4 lg:py-4 lg:px-8  bg-primary bg-opacity-70 text-fourth text-2xl hover:text-orange" to="/projektNr7">
          Projekt Nr.5
        </router-link>
      </SplideSlide>
    </Splide>
    <Office/>
            <div class="divide-all bg-fourth w-full h-0.5 my-12"></div>
    <Founders/>
            <div class="divide-all hidden lg:block bg-fourth w-full h-0.5 my-12"></div>
    <News/>
    <ToTop/>
    <Footer/>
    </section>
</template>

<script>

import {Splide, SplideSlide} from '@splidejs/vue-splide';
import News from "../components/News";
import Footer from "../components/Footer";
import Office from "../components/Office";
import Founders from "../components/Founders";
import Card from "../components/Card"
import ToTop from "../components/ToTop";


import {defineComponent} from 'vue';
import '@splidejs/splide/dist/css/splide.min.css';


export default defineComponent({
  name: 'Home',
  props: ['showNavbar','showModal'],

  components: {
    Splide,
    SplideSlide,
    News,
    Footer,
    Office,
    Founders,
    Card,
    ToTop
  },

  beforeMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },

  setup() {
    const options = {
      autoplay: false,
      rewind: false,
      height: '92vh',
      speed: 1000,
      focus     : 'center',
      pagination: 'slider',
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      wheel:false,
      flickPower: 600,
    };

    return {options};
}
});

</script>
