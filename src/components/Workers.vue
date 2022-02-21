<template>
  <section class="relative">

    <h1 class="font-bold text-4xl text-center font-raleway my-10">Mitarbeitern</h1>

    <div class=" lg:w-2/3 mx-auto grid lg:grid-cols-3 lg:grid-rows-3 justify-items-center gap-4 md:gap-6 lg:gap-8  ">
      <div class="img-wrapper relative w-80  overflow-hidden  "
           v-for="person in persons"
           :key="person.name">
        <img class=" mx-auto  w-10/12 h-72 lg:w-64 lg:h-80 xl:w-full  xl:h-96" :src="person.imageUrl" :alt="person.name">
        <h2 class="absolute w-full m-0 py-2.5  bottom-0 bg-fourth font-muli text-primary text-center uppercase ">{{person.name}}</h2>
        <ul class="absolute top-0 left-0 m-0 p-0 list-none ">
          <li class="w-80 text-center">
            <p class="text-primary bg-fourth">{{ person.function }}</p></li>
        </ul>
      </div>
      <span id="divider" class="absolute w-full hidden  sm:block sm:max-w-sm h-1 lg:h-1.5 xl:h-2 lg:max-w-sm  bg-orange -right-60" data-aos="fade-left" data-delay="300"></span>
    </div>
    <span id="divider2" class="absolute w-full hidden sm:block sm:max-w-sm  h-1 lg:h-1.5 xl:h-2 lg:max-w-sm  bg-orange bottom-0 -left-60" data-aos="fade-right" data-delay="300"></span>

  </section>

</template>

<script>
import AOS from "aos";
import 'aos/dist/aos.css'


const persons = [
  {
    name: 'Eberhard Müller',
    function: 'Founder/Partner',
    imageUrl: `${require('../assets/Eberhard.jpg')}`
  },
  {
    name: 'Fabienne Meyer',
    function: 'Rezeptionistin',
    imageUrl: `${require('../assets/workers/07_worker.jpg')}`

  },

  {
    name: 'Fabian Schneider',
    function: 'Founder/Partner',
    imageUrl: `${require('../assets/Fabian.jpg')}`
  },

  {
    name: 'Nicola Weber',
    function: 'Mitarbeiter',
    imageUrl: `${require('../assets/workers/01_worker.jpg')}`
  },
  {
    name: 'Luka Schmidt',
    function: 'Mitarbeiter',
    imageUrl: `${require('../assets/workers/02_worker.jpg')}`
  },


  {
    name: 'Nikita Hofmann',
    function: 'Mitarbeiter',
    imageUrl: `${require('../assets/workers/03_worker.jpg')}`
  },


  {
    name: 'Hinrich Wagner',
    function: 'Mitarbeiter',
    imageUrl: `${require('../assets/workers/04_worker.jpg')}`
  },
  {
    name: 'Hans Bauer',
    function: 'Mitarbeiter',
    imageUrl: `${require('../assets/workers/05_worker.jpg')}`
  },

  {
    name: 'Marie Jung',
    function: 'Mitarbeiter',
    imageUrl: `${require('../assets/workers/06_worker.jpg')}`
  },

]



export default {
  name: "Workers",

  setup() {
    return {
      persons,
    }
  },

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

<style scoped>
@import url("https://use.typekit.net/zsm0hjd.css");


.img-wrapper:before
{
  content: '';
  position: absolute;
  top: 0;
  left: 180%;
  height: 100%;
  width: 100%;
  background: rgba(255,255,255,.3);
  z-index: 1;
  transform: skew(45deg);
  transition: .5s;
}

.img-wrapper:hover:before
{
  left: -180%;
}

.img-wrapper img
{

  filter: grayscale(100%);
  transition: 2s;
}
.img-wrapper:hover img
{
  filter: grayscale(0%);
  transform: scale(1.1);
}

.img-wrapper h2
{
  transform: perspective(400px) rotateY(90deg);
  transform-origin: right;
  transition: 1s;
}

.img-wrapper:hover h2
{
  transform: perspective(400px) rotateY(0deg);
}

.img-wrapper ul li
{
  line-height: 40px;
  transform: perspective(800px) rotateY(90deg);
  transition: .5s;
  transform-origin: left;
}

.img-wrapper:hover ul li
{
  transform: perspective(800px) rotateY(0deg);
}

</style>