<template>
  <div id="sidebar"
      :class="{'open': showNavbar }"
      class="bg-primary h-full w-full md:w-1/6 fixed pt-12 lg:pt-20 invisible z-20 opacity-1">
    <div id="widgets"
        class="max-h-full w-full relative overflow-auto"
    >
      <nav
          id="mainmenu"
          class="block h-full flex flex-col text-xl uppercase text-center md:text-left text-fourth"
          v-for="router in routers"
          :key="router.name">
        <router-link :to="{path:router.routerTo}"
        class="w-full inline-block px-2 lg:pl-8 no-underline text-sm md:text-xs lg:text-base font-muli"

        >{{router.name}}</router-link>
      </nav>
    </div>
  </div>
</template>

<script>

const routers = [
  {
    name: 'Home',
    routerTo: '/'
  },
  {
    name: 'Über uns',
    routerTo: '/uber-uns'
  },

  {
    name: 'Projekte',
    routerTo: '/projekte'
  },

  {
    name: 'Kontakt',
    routerTo: '/kontakt'
  },
  {
    name: 'Impressum',
    routerTo: '/impressum'
  },

  {
    name: 'Datenschutz',
    routerTo: '/datenschutz'
  },
]

export default {
  name: "Navigation",
  props: ['showNav','showNavbar'],
  setup() {
    return {
      routers,
    }
  },

}
</script>

<style scoped>

@import url("https://use.typekit.net/zsm0hjd.css");

.router-link-active {

  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  transition: 0.5s all;

}
#mainmenu a {
  line-height: 60px;
  letter-spacing: 4px;
  transition: all 0.5s linear;
}

#mainmenu a:hover {
  background-color: rgba(0, 0, 0, 0.1);
  color:white;
}


#sidebar {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
#widgets {
  -webkit-overflow-scrolling: touch;
}

#sidebar.open {
  visibility: visible;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition-speed: 0.2s;
  transition-speed: 0.2s;

}
</style>
