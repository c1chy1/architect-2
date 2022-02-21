<template>
  <section id="contact">
    <Form/>
    <ToTop/>
    <Footer/>
  </section>
</template>

<script>

import Form from "../components/Form";
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";

export default {
  name: "Contact",

  components: {ToTop, Footer,Form},


  beforeMount() {

    window.scrollTo(0, 0)
  },

}
</script>

<style scoped>

</style>
