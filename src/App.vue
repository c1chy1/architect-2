<template>
  <Top
      :show-nav="showNav"
      :showNavbar="showNavbar"/>
  <Navigation
      :showNavbar="showNavbar"/>
  <div
      id="overlay"
      class="fixed hidden md:block top-0 left-0 w-0 h-0 opacity-0 "
      :class="{sidebaropen: showNavbar}"
      @click="showNav"></div>
  <div
      id="main-wrapper"
      class="w-full h-full relative overflow-hidden transition-all top-0 pt-12 lg:pt-20 z-0"
      :class="{mainopen: showNavbar }">
    <router-view
        v-slot="{ Component }">
      <transition
          name="scale-slide"
          mode="out-in"
          @before-leave="beforeLeave">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>
<script>

import Top from "./components/Top";
import Navigation from "./components/Navigation";

export default {


  components: {Top, Navigation},


  data() {
    return {
      showNavbar: false,
    }
  },

  methods: {
    beforeLeave: function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      this.showNavbar = false;

    },

    showNav() {
      this.showNavbar = !this.showNavbar;
    }

  },


}


</script>


<style lang="scss">


.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}


.scale-slide-enter-active,
.scale-slide-leave-active {
  position: relative;
  transition: all 0.85s ease;
}


.scale-slide-enter-from {
  left: -100%;
}


.scale-slide-enter-to {
  left: 0;
}


.scale-slide-leave-from {
  transform: scale(1);

}


.scale-slide-leave-to {
  transform: scale(0.8);
  opacity: 0;
}



body {

  background-color: #DFD3C3;

}
#app {

  color: #2c3e50;
  overflow: hidden;
}

#overlay {

  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: initial;
  transition: initial;
}

.sidebaropen {
  width: 100% !important;
  height: 100% !important;
  left: 16.6666% !important;
  opacity: 1 !important;
  z-index: 5 !important;
  -webkit-transition: opacity 0.3s 0.3s !important;;
  transition: opacity 0.3s 0.3s !important;;
}

.mainopen {
  transform: translate(16.666%, 0);

}

#main-wrapper {

  transition: all 0.3s;
}

#main {

  transition: transform 0.3s;

}

@media (max-width: 1024px) {
  .splide__pagination__page { display: none!important; }
}


.splide__pagination__page {

  margin: 25px !important;
  transform: scale(2.4) !important;
  background: #2c3e50 !important;

}

.splide__pagination__page.is-active {

  transform: scale(1.4);
  background-color: white !important;
}

</style>
