<template>
  <button
      id="top"
      class="p-2 absolute right-0 bottom-32 w-8 sm:w-10 lg:w-12 text-primary bg-fourth rounded-l-lg "
      data-aos-once="false"
      data-aos="fade-left"
      @click="toTop"></button>
</template>

<script>


export default {
  name: "ToTop",
  methods: {

    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  },

}
</script>

<style scoped lang="scss">

#top:before {
   content: url(../assets/svg/arrow-up-solid.svg);
 }

</style>
