<template>
  <main class="flex flex-col lg:flex-row  w-11/12 mx-auto mt-8 font-raleway font-normal py-10">
    <h1 class="lg:w-1/2 font-bold text-4xl text-center">PHILOSOPHIE</h1>
    <div class="lg:w-1/2 text-center ">
      <p class="text-sm text-center sm:text-left py-4 lg:text-base leading-7  lg:pr-10">Der heutige Anspruch an Architekturbüros ist die umfassende Kompetenz in
        allen Phasen des Dialoges mit den Bauherren. Nur gemeinsam mit Bauherren, Ingenieuren, Landschaftsplanern und
        Designern entstehen Lösungen, die den Mut haben Erfahrung und Innovation zu verbinden.<br>
        dreibund architekten stehen für eine intensive Auseinandersetzung mit der gestellten Aufgabe, dem daraus
        resultierenden Entwurf und dessen Umsetzung mit einer zukunftsweisenden, qualitätvollen Lösung. Die drei
        Gesellschafter verfügen&nbsp; über langjährige Erfahrungen in den Bereichen Konzeptentwicklung,
        Machbarkeitsstudien, Gutachten und Wettbewerben.<br>
        dreibund architekten stehen neben der ganzheitlichen Betrachtung einer Aufgabe für eine qualitative,
        termingerechte Umsetzung des Entwurfes auf hohem Niveau und im gegebenen Kostenrahmen. Inhaber und Projektteam
        verfügen über große Erfahrungen in der Abwicklung von hochbaulichen, städtebaulichen und innen-
        architektonischen Aufgabenstellungen.</p>
    </div>
    <section class="grid grid-cols-2 gap-2 lg:gap-5 p-2 divide-y-2 divide-fourth text-center">
      <img v-lazy="{src: `${require('../assets/office.jpg')}`}">
      <img v-lazy="{src: `${require('../assets/office.jpg')}`}">
      <img v-lazy="{src: `${require('../assets/office.jpg')}`}">
      <img v-lazy="{src: `${require('../assets/office.jpg')}`}">
      <p class=" py-2 lg:py-4 text-xs sm:text-sm lg:text-base ">maxstr. 7 <br>
        44793 Köln<br>
        deutschland<br>
        t.:0234 6873521<br>
        f.:0234 6872253<br>
        <a href="mailto:mail@acme-studios.de" class="hover:text-orange">mail@acme-studios.de</a><br>
      </p>
      <p class="text-center py-2 lg:py-4 text-xs sm:text-sm lg:text-base">acme studios | Köln | Marketingagentur PartGmbB</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "Office"
}
</script>

