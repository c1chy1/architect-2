<template>
  <section class="relative flex flex-row-reverse justify-around text-center w-11/12 mx-auto mb-12">
    <div class="flex flex-col w-1/2 my-auto lg:bg-primary lg:px-12 lg:py-8 rounded-xl">
      <h1 class="uppercase lg:text-3xl text-orange font-bold font-raleway">Eberhard Müller</h1>
      <h2 class="py-1 lg:py-4 text-orange font-raleway">Founder/Partner</h2>
      <p class=" text-xs  lg:text-xl w-11/12 lg:w-7/12 mx-auto">With over three decades in the industry, award-winning architect Blaze Makoid has dedicated his career to designing visionary resort-like homes for his esteemed clientele.</p>
      <span id="divider"
            class="absolute w-full h-1 max-w-xs  lg:h-2.5 lg:max-w-sm bg-orange lg:top-3 -right-80"
            data-aos="fade-left"
            data-delay="300"
      ></span>
    </div>
  <div class="w-1/3 lg:w-1/2">



=    <img class="shadow-img mx-auto"
         v-lazy="{src: `${require('../assets/Eberhard.jpg')}`}"
         alt="Eberhard Müller">
  </div>
  </section>
  <section class="flex justify-around w-11/12 mx-auto relative text-center">
    <div class="flex flex-col w-1/2 my-auto lg:bg-primary lg:px-12 lg:py-8 rounded-xl">
      <h1 class="uppercase lg:text-3xl text-orange font-bold font-raleway">Fabian Schneider</h1>
      <h2 class="py-1 lg:py-4 text-orange font-raleway">Founder/Partner</h2>
      <p class="text-xs lg:text-xl w-11/12 lg:w-7/12 mx-auto">With over three decades in the industry, award-winning architect Blaze Makoid has dedicated his career to designing visionary resort-like homes for his esteemed clientele.</p>
      <span id="divider2"
            class="absolute w-full h-1 max-w-xs  lg:h-2.5 lg:max-w-sm lg:top-3  bg-orange -left-80"
            data-aos="fade-right"
            data-delay="300"
      ></span>
    </div>

    <div class="w-1/3 lg:w-1/2">
    <img class="shadow-img mx-auto"
         v-lazy="{src: `${require('../assets/Fabian.jpg')}`}" alt="Fabian Schneider">
    </div>

  </section>
</template>

<script>


import AOS from "aos";
import 'aos/dist/aos.css'


export default {
  name: "Founders",

  mounted() {

    AOS.init({
      once: false,
      duration: 750,
      easing: 'ease-out-sine',
      disable: 'mobile'
    })
  },

}
</script>
