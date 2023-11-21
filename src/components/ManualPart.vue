<template>
    <section id="manual" class="pt-5 pb-5">
      <div class="container">
        <h2 class="text-center mb-4 tools-title">Manual de usuario</h2>
        <div class="row justify-content-center">
          <div v-for="(mockup, index) in mockups" :key="index" class="col-md-3">
            <img :src="mockup.imageSrc" :alt="mockup.imageAlt" class="img-fluid" />
          </div>
        </div>
        <!-- Nuevo enlace de texto debajo de las imágenes -->
        <div class="row justify-content-center mt-3">
          <div class="col-md-8 text-center">
            <a href="https://docs.google.com/document/d/1maTaO1_qpbYKMT593olyp45Vma0iTg_UeFYV8hQoYuQ/edit" class="docs-link" target="_blank">Mira nuestro Manual</a>
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
            imageSrc: require("../assets/manual1.png"),
            imageAlt: "Mockup 1",
          },
          {
            imageSrc: require("../assets/manual2.png"),
            imageAlt: "Mockup 2",
          },
          {
            imageSrc: require("../assets/manual3.png"),
            imageAlt: "Mockup 3",
          },
          {
            imageSrc: require("../assets/manual4.png"),
            imageAlt: "Mockup 4",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

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
  