<template>
  <transition name="fade"
              mode="in-out">
    <section class="hero w-full absolute top-0 bg-no-repeat bg-cover h-screen overflow-hidden" v-if="showModal">
      <div class="hero-container relative box-border h-auto p-10 z-10">
        <p class="ml-4 animate fadeInLeft text-primary text-left font-muli text-base font-bold uppercase">
          Architektur-News</p>
        <h1 class="hero-title py-2 sm:py-4 lg:py-7 ml-2 animate fadeInLeft delay-600 text-primary text-5xl md:text-5xl lg:text-9xl font-muli leading-tight">
          Unser Büro</h1>
        <button
            @click="showModal = false"
                class="ml-4 lg:mt-4 py-2 px-2 md:py-5 md:px-5 lg:py-6 lg:px-12 transition-all hero-button animate fadeInLeft delay-800 bg-primary bg-opacity-70 text-fourth text-2xl hover:text-orange"
                title="Click to see more">Click Me
        </button>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      showModal: true,

    }
  },
}
</script>

<style scoped lang="scss">




.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: all 0.85s ease;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}

.hero {

  backface-visibility: hidden;

  @media screen and (min-width: 640px) {
    background-position: 50% 0;
  }

  &:after {
    background-color: rgba(89, 110, 121, .5);
    bottom: 0;
    content: '';
    left: -2000%;
    position: absolute;
    right: -2000%;
    top: 0;
    z-index: 1;
  }
}

.hero-container {
  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  -webkit-transition-duration: 1.2s;
  transition-duration: 1.2s;

  @media screen and (min-width: 640px) {
    height: 100%;
  }

  p {
    letter-spacing: 6px;
  }
}

.hero-button {
  letter-spacing: 2px;
  text-decoration: none;

}

.hero-title {
  letter-spacing: 1px;

}


@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

.animate {
  animation-delay: 1s;
  animation-duration: 0.75s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.2, 0.3, 0.25, 0.9);
}
</style>