<template>
  <NavBar></NavBar>
  <body>
    <CoverImage />
    <PageDescription />
    <TolSection />
    <MockupsPage /> 
    <ManualPart />
  </body>
  <Footer></Footer>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CoverImage from "./components/CoverImage.vue";
import Footer from "./components/Footer.vue";
import PageDescription from "./components/PageDescription.vue";
import TolSection from "./components/TolSection.vue";
//import FaseInicio from "./components/FaseInicio.vue";
//import FasePlan from "./components/FasePlan.vue";
//import FasePrueba from "./components/FasePrueba.vue";
import MockupsPage from "./components/MockupsPage.vue";
//import FaseCierre from "./components/FaseCierre.vue";
import ManualPart from "./components/ManualPart.vue"

export default {
  name: "App",
  components: {
    NavBar,
    CoverImage,
    Footer,
    PageDescription,
    //FaseInicio,
    //FasePlan,
    //FasePrueba,
    TolSection,
    MockupsPage,
    //FaseCierre,
    ManualPart
},
};
</script>

<style>
body {
  padding-top: 0rem;
}
body::-webkit-scrollbar {
  width: 8px; /* Ancho del scroll */
}

body::-webkit-scrollbar-thumb {
  background-color: #888; /* Color del scroll */
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Color del scroll al pasar el cursor sobre él */
}
*{
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

</style>