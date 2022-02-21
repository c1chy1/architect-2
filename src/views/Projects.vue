<template>
  <section id="Projects">
    <h1 class="w-full font-bold text-4xl text-center my-4 lg:my-12 font-raleway">PROJEKTE</h1>
    <div class="grid lg:grid-rows-3 lg:grid-cols-3 gap-1.5 p-2">
      <div class="box relative w-full h-80 bg-cover bg-repeat-round bg-origin-border overflow-hidden rounded-lg text-primary" v-for="project in projects" :key="project.name"
           :style="{'background-image': project.backgroundDiv}">
        <router-link :to="{path:project.routerTo}">
          <div class="overlay h-full text-center text-primary font-muli py-16 opacity-0 hover:opacity-100">
            <span class="plus font-bold text-primary text-8xl">+</span>
            <h1>{{ project.name }}</h1>
            <p>{{ project.address }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <ToTop/>
    <Footer/>
  </section>

</template>

<script>
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";


const projects = [
  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/01_home.jpg')})`,
    routerTo: '/projektNr1'
  },
  {
    name: 'KRONENSTRASSE',
    address: 'Bochum | 2.PREIS',
    backgroundDiv: `url(${require('../assets/slider/02_home.jpg')})`,
    routerTo: '/projektNr2'

  },

  {
    name: 'WOHNQUARTIER',
    address: 'Hilden',
    backgroundDiv: `url(${require('../assets/slider/03_home.jpg')})`,
    routerTo: '/projektNr3'
  },

  {
    name: 'HENRI-DUNANT-STRASSE',
    address: 'Essen | 2.RANG',
    backgroundDiv: `url(${require('../assets/slider/04_home.jpg')})`,
    routerTo: '/projektNr4'
  },
  {
    name: 'ALBERT SCHWEITZER CAREE',
    address: 'Herne | 2.RANG',
    backgroundDiv: `url(${require('../assets/slider/05_home.jpg')})`,
    routerTo: '/projektNr7'
  },


  {
    name: 'RÜTTENSCHEIDER BOGEN',
    address: 'Essen | Gutachten',
    backgroundDiv: `url(${require('../assets/slider/06_home.jpg')})`,
    routerTo: '/projektNr6'
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/08_home.jpg')})`,
    routerTo: '/projektNr5'
  },
  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/07_home.jpg')})`,
    routerTo: ''
  },

  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/09_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/10_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/11_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/12_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/13_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/14_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/15_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/16_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/17_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/18_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/19_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../assets/slider/20_home.jpg')})`,
    routerTo: ''
  },
]

export default {
  name: "Projects",

  setup() {
    return {
      projects,
    }
  },

  components: {Footer, ToTop},

  beforeMount() {

    window.scrollTo(0, 0)
  },

}
</script>

<style scoped>
.box {
  box-shadow: inset 1px 1px 40px 0 rgba(0, 0, 0, 0.45);
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  margin: 5% auto 0 auto;
}
.overlay {
  background: rgba(0, 0, 0, 0.75);
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
}
</style>
