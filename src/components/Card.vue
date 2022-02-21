<template>
  <transition name="fade"
              mode="in-out">
    <div

        ref="card"

        class="card w-2/3 lg:w-1/3 h-1/2 transition-all p-4 absolute top-0 bottom-0 mt-auto mb-auto left-0 right-0 ml-auto mr-auto flex items-end text-center overflow-hidden rounded-3xl bg-cover bg-repeat-round"
         v-if="showModal">
      <div class="content w-full  p-4 mb-2  lg:mb-5  relative flex flex-col items-center z-10">
        <h2 class="title text-xs sm:text-xl lg:text-2xl font-bold leading-5 py-2">Wir gehen der Sache auf den Grund.</h2>
        <p class="w-3/4 text-xs  sm:text-sm   lg:text-base xl:text-xl">Um die richtigen Lösungen zu entwickeln, müssen wir die Wurzel und die Komplexität
          unserer Aufgabe verstehen.</p>
        <button @click="showModal=false" class="btn mt-6 py-1 px-2  lg:py-3 lg:px-6 text-sm lg:text-base font-bold uppercase text-primary hover:text-secondary bg-fourth border-0 cursor-pointer">
          Highlight</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {
      showModal: true,
    }
  },



}
</script>

<style scoped lang="scss">

$bp-md: 600px;
$bp-lg: 800px;


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}

.card {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: Muli, Georgia, serif;
  --font-serif: 'Cardo', serif;
}


.card {
  background-image: url("../assets/bg-modal.jpg");

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
  0 2px 2px rgba(0, 0, 0, 0.1),
  0 4px 4px rgba(0, 0, 0, 0.1),
  0 8px 8px rgba(0, 0, 0, 0.1),
  0 16px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: $bp-md) {
    height: 350px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(var(--d) * 1.5) var(--e);
    pointer-events: none;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
            to bottom,
            hsla(0, 0%, 0%, 0) 0%,
            hsla(0, 0%, 0%, 0.009) 11.7%,
            hsla(0, 0%, 0%, 0.034) 22.1%,
            hsla(0, 0%, 0%, 0.072) 31.2%,
            hsla(0, 0%, 0%, 0.123) 39.4%,
            hsla(0, 0%, 0%, 0.182) 46.6%,
            hsla(0, 0%, 0%, 0.249) 53.1%,
            hsla(0, 0%, 0%, 0.320) 58.9%,
            hsla(0, 0%, 0%, 0.394) 64.3%,
            hsla(0, 0%, 0%, 0.468) 69.3%,
            hsla(0, 0%, 0%, 0.540) 74.1%,
            hsla(0, 0%, 0%, 0.607) 78.8%,
            hsla(0, 0%, 0%, 0.668) 83.6%,
            hsla(0, 0%, 0%, 0.721) 88.7%,
            hsla(0, 0%, 0%, 0.762) 94.1%,
            hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-30%);
    transition: transform calc(var(--d) * 2) var(--e);
  }
}

.content {
  transition: transform var(--d) var(--e);
}

@media (hover: hover) and (min-width: $bp-md) {
  .card:after {
    transform: translateY(0);
  }

  .content {
    transform: translateY(calc(100% - 4.5rem));

    > *:not(.title) {
      opacity: 0;
      transform: translateY(1rem);
      transition: transform var(--d) var(--e),
      opacity var(--d) var(--e);
    }
  }

  .card:hover,
  .card:focus-within {
    align-items: center;

    &:before {
      transform: translateY(-4%);
    }

    &:after {
      transform: translateY(-30%);
    }

    .content {
      transform: translateY(0);

      > *:not(.title) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--d) / 8);
      }
    }
  }

  .card:focus-within {
    &:before,
    &:after,
    .content,
    .content > *:not(.title) {
      transition-duration: 0s;
    }
  }
}
</style>
