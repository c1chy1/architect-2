<template>
  <section id="projectNr3">
    <div class="w-11/12 lg:w-1/2 container mx-auto ">
      <router-link id="back" to="/projekte" class="hidden lg:block absolute w-6 h-6 right-80"></router-link>
      <img class=" mx-auto mt-8 lg:mt-20 shadow-img"
           src="../assets/slider/03_home.jpg">
      <h1 class="text-3xl py-2 lg:py-3">Wohnquartier</h1>
      <h2 class="text-xl py-2 lg:py-3 font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
      <h5 class="text-md font-semibold">Hilden</h5>
      <article class=" xl:flex">
        <div class="text-sm py-2 lg:py-3 lg:text-base xl:pr-10">
          <p>This is a renovation of a 4,000 square foot loft in Tribeca. The loft is 3 floors: one main floor with a
            mezzanine above and a lower level with a guest suite.</p><br>
          <p>Architecturally, this loft is almost all white. It features off-whites and some light greys, as well as
            some hints of color throughout. It was designed to have a clean, modern, and calming feel that reflects the
            luxurious nature of a 4,000 square foot Tribeca loft.</p><br>
          <p>The loft has an all-white simple and modern kitchen tucked underneath the upper mezzanine. The mezzanine
            has glass rails with translucent sliding panel doors. These allow the mezzanine to receive light from the
            large living room windows, while allowing for either privacy or openness depending on need.</p>
        </div>
        <div>
          <img class="mx-auto shadow-img"
               v-lazy="{src: `${require('../assets/projects/project3/01_project.jpg')}`}">
        </div>
      </article>
      <img class="mt-8 mb-2 shadow-img"
           v-lazy="{src: `${require('../assets/projects/project3/02_project.jpg')}`}">
      <img class="my-4 shadow-img"
           v-lazy="{src: `${require('../assets/projects/project3/03_project.jpg')}`}">
      <img class="my-4 shadow-img"
           v-lazy="{src: `${require('../assets/projects/project3/04_project.jpg')}`}">
      <article class="flex">
        <img class="w-1/2 pr-1"
             v-lazy="{src: `${require('../assets/projects/project3/06_project.jpg')}`}">
        <img class="w-1/2 pl-1"
             v-lazy="{src: `${require('../assets/projects/project3/05_project.jpg')}`}">
      </article>
    </div>
    <ToTop/>
    <Footer/>
  </section>
</template>

<script>
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";

export default {
  name: "ProjectNr3",

  components: {
    Footer,ToTop
  }
}
</script>

<style scoped>
#back {
  background: url(../assets/svg/close-icon.svg) no-repeat;
}
</style>