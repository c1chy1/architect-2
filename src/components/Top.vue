<template>
  <div id="top"
       class="w-full h-12 lg:h-20 flex justify-between fixed bg-primary text-center z-30 px-4  lg:px-8">
    <a
        @click="showNav"
        id="sidebar-button"
        :class="{'open': showNavbar }"
        class="absolute lg:left-7 lg:top-7  flex w-6 h-6 self-center block z-50  cursor-pointer"></a>
    <router-link to="/" class="relative mx-auto  text-xl sm:text-3xl lg:text-5xl my-auto  text-fourth font-muli">Acme Studios</router-link>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: ['showNav', 'showNavbar'],
}
</script>

<style scoped lang="scss">

#top {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  box-shadow: 5px 1px 5px black;
}

#sidebar-button {

  background: url("../assets/svg/menu-icon.svg") no-repeat;
  transition: all 0.3s;
}

#sidebar-button.open {
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(
          90deg);
  transform: rotate(
          90deg
  );
}

</style>
