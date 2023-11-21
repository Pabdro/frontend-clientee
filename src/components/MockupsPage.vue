<template>
    <section id="mockups" class="pt-5 pb-5">
      <div class="container">
        <h2 class="text-center mb-4 tools-title">Diseño</h2>
        <div class="row justify-content-center">
          <div v-for="(mockup, index) in mockups" :key="index" class="col-md-3">
            <img :src="mockup.imageSrc" :alt="mockup.imageAlt" class="img-fluid" />
          </div>
        </div>
        <!-- Nuevo enlace de texto debajo de las imágenes -->
        <div class="row justify-content-center mt-3">
          <div class="col-md-8 text-center">
            <a href="https://www.figma.com/file/vKPXFYGaHc3PaVPHvje35N/MockupsRommos?type=design&node-id=0-1&mode=design&t=WnoEYYuApfYvs3Zk-0" class="docs-link" target="_blank">Explora nuestros Mockups</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mockups: [
          {
            imageSrc: require("../assets/inicioMoc.png"),
            imageAlt: "Mockup 1",
          },
          {
            imageSrc: require("../assets/cursosMoc.png"),
            imageAlt: "Mockup 2",
          },
          {
            imageSrc: require("../assets/pagCurso.png"),
            imageAlt: "Mockup 3",
          },
          {
            imageSrc: require("../assets/payMoc.png"),
            imageAlt: "Mockup 4",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos específicos si es necesario */
  
  /* Nuevo estilo para el enlace de exploración de Mockups */
  .docs-link {
    color: #000000;
    font-weight: bold;
    text-decoration: none;
    font-size: 20px; /* Tamaño de fuente grande, ajusta según tus preferencias */
    transition: color 0.3s ease;
  }
  
  .docs-link:hover {
    color: orange; /* Cambia a naranja al pasar el ratón */
  }

  .tools-title {
  color: orange;
  font-weight: bold;
}
  </style>
  