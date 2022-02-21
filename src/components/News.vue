<template>
  <section class="hidden lg:block">
  <div id="news" class="w-full font-bold text-5xl text-center font-raleway">NEWS</div>
  <div class="options h-[400px] min-w-max max-w-4xl flex items-stretch mx-auto my-12 font-raleway overflow-hidden">

    <div
        class="option active  relative flex overflow-hidden"
        @click="click"
        ref="div1"
        id="1">
      <div class="shadow self-start">
        <h1 class="text-center text-3xl mt-4">Thema 1</h1>
        <p class="bg-primary bg-opacity-60 p-5 mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

      </div>
      <div class="label ">
        <div class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>
        </div>
        <div class="info ">
          <div class="main">Fabian Schneider</div>
          <div class="sub">17.01.2022</div>
        </div>
      </div>
    </div>
    <div
        class="option relative overflow-hidden"
        @click="click"
        ref="div2"
        id="2">
      <div class="shadow self-start">
        <h1 class="text-center text-3xl mt-4">Thema 2</h1>
        <p class="bg-primary bg-opacity-60 p-5 mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>

      </div>
      <div class="label">
        <div class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>
        </div>
        <div class="info">
          <div class="main">Eberhard Müller</div>
          <div class="sub">06.01.2022</div>
        </div>
      </div>
    </div>
    <div class="option relative overflow-hidden"
         @click="click"
         ref="div3"
         id="3"
         >
      <div class="shadow self-start">

        <h1 class="text-center text-3xl mt-4">Thema 3</h1>
        <p class="bg-primary bg-opacity-60 p-5 mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>

      </div>
      <div class="label">
        <div class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>        </div>
        <div class="info">
          <div class="main">Fabienne Meyer</div>
          <div class="sub">18.12.2021</div>
        </div>
      </div>
    </div>
    <div class="option relative overflow-hidden"
         @click="click"
         ref="div4"
          id="4">
      <div class="shadow self-start">
        <h1 class="text-center text-3xl mt-4">Thema 4</h1>
        <p class="bg-primary bg-opacity-60 p-5 mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

      </div>
      <div class="label">
        <div class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>
        </div>
        <div class="info">
          <div class="main">Fabian Schneider</div>
          <div class="sub">11.25.2021</div>
        </div>
      </div>
    </div>
    <div class="option relative overflow-hidden"
         @click="click"
         ref="div5"
         id="5">
      <div class="shadow self-start">
        <h1 class="text-center text-3xl mt-4">Thema 5</h1>
        <p class="bg-primary bg-opacity-60 p-5 mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>
      <div class="label">
        <div class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>
        </div>
        <div class="info">
          <div class="main">Hinrich Wagner</div>
          <div class="sub">10.29.2021</div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>


export default {
  name: "CardsNr3",


  data() {

    return {

      active: false,
    }

  },


  methods: {

    click(el) {


      this.$refs.div1.classList.remove('active')
      this.$refs.div2.classList.remove('active')
      this.$refs.div3.classList.remove('active')
      this.$refs.div4.classList.remove('active')
      this.$refs.div5.classList.remove('active')
      el.currentTarget.classList.add('active')

    }

  }
}
</script>

<style scoped lang="scss">

@import url("https://use.typekit.net/zsm0hjd.css");


body {

  .options {


    .option {
      box-shadow: 8px 1px 5px -3px black;
      min-width: 60px;
      margin: 10px;
      background-size: auto 120%;
      background-position: center;
      cursor: pointer;
      transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      background-image: url("../assets/news.jpg");

      &.active {
        flex-grow: 10000;
        transform: scale(1);

        max-width: 600px;
        margin: 10px;
        border-radius: 40px;

        background-size: auto 100%;

        .label {
          bottom: 20px;
          left: 20px;

          .info > div {
            left: 0px;
            opacity: 1;
          }
        }

        /*&:active {
           transform:scale(0.9);
        }*/
      }

      &:not(.active) {
        flex-grow: 1;

        border-radius: 30px;

  .shadow {

    opacity: 0;
  }
        .label {
          bottom: 10px;
          left: 10px;

          .info > div {
            left: 20px;
            opacity: 0;
          }
        }
      }

      .shadow {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 120px;

        transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      }

      .label {
        display: flex;
        position: absolute;
        right: 0;

        height: 40px;
        transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

        .icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          min-width: 40px;
          max-width: 40px;
          height: 40px;
          border-radius: 100%;

          background-color: #F0ECE3;
          color: var(--defaultBackground);
        }

        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;

          margin-left: 10px;

          color: #2c3e50;

          white-space: pre;

          > div {
            position: relative;
            background-color: rgba(240, 236, 227, 0.7);
            padding: 2px 10px 2px 10px ;
            margin: 1px 2px 2px 2px;

            border-radius: 5px;
            opacity: 0.7;
            transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity .5s ease-out;
          }

          .main {
            font-weight: bold;
            font-size: 1.6rem;
            text-align: left;
          }

          .sub {
            transition-delay: .1s;
            font-size: 1rem;
          }
        }
      }
    }
  }
}


</style>
