<template>
  <section id="projectNr1 relative">
    <div class="w-11/12 lg:w-1/2 container mx-auto ">

      <router-link id="back" to="/projekte" class="hidden lg:block absolute w-10 h-10 right-80"></router-link>
      <img class=" mx-auto mt-8 lg:mt-20 shadow-img"
           src="../assets/slider/01_home.jpg">
      <h1 class="text-3xl py-2 lg:py-3">Neues Wohnen</h1>
      <h2 class="text-xl py-2 lg:py-3 font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing</h2>
      <h5 class="text-md font-semibold">Augustastraße | Herne 1.PREIS</h5>
      <article class=" xl:flex">
        <div class="text-sm py-2 lg:py-3 lg:text-base xl:pr-10">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat.</p><br>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren.</p><br>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img class="mx-auto shadow-img"
               v-lazy="{src: `${require('../assets/projects/project1/01_project.jpg')}`}">
        </div>
      </article>
      <img class="mt-8 mb-2 shadow-img"
           v-lazy="{src: `${require('../assets/projects/project1/02_project.jpg')}`}">
      <img class="my-4 shadow-img"
           v-lazy="{src: `${require('../assets/projects/project1/03_project.jpg')}`}">
      <img class="my-4 shadow-img"
           v-lazy="{src: `${require('../assets/projects/project1/04_project.jpg')}`}">
      <article class="flex">
        <img class="w-1/2 pr-1"
             v-lazy="{src: `${require('../assets/projects/project1/01_project.jpg')}`}">
        <img class="w-1/2 pl-1"
             v-lazy="{src: `${require('../assets/projects/project1/03_project.jpg')}`}">
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
  name: "ProjectNr1",

  components: {
    Footer, ToTop
  },
}
</script>
<style>

#back {
  background: url(../assets/svg/close-icon.svg) no-repeat;

}

</style>