<template>
    <section id="cierre" class="pt-5 pb-5">
      <div class="container">
        <div class="text-center">
          <h2 class="display-6 tools-title">{{ mainTitle }}</h2>
          <h4 class="sub-title">
            <a :href="subtitleLink" class="subtitle-link" target="_blank">{{ subtitle }}</a>
          </h4>
          <p class="text-justify">{{ textBelowSubtitle }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mainTitle: "Cierre",
        subtitle: "Carta de entrega de producto",
        subtitleLink: "https://docs.google.com/document/d/1R6OrlwbAt_Y8eS0Rpf18kC-uO_nqaf6J5d7i7F0iCWw/edit", 
        textBelowSubtitle: "La Carta de Entrega de Producto de ROMMOS S.R.L. representa el último paso en nuestro compromiso de proporcionar soluciones de calidad a nuestros clientes. Este documento oficial certifica la finalización exitosa de un proyecto y la entrega del producto o servicio correspondiente. A través de esta carta, formalizamos la transferencia de responsabilidad del equipo de desarrollo al cliente, asegurando que todas las especificaciones y requisitos acordados se hayan cumplido de manera satisfactoria. Además, la carta de entrega del producto de ROMMOS S.R.L. puede incluir detalles clave sobre manuales de usuario, información técnica y cualquier otro documento relevante para garantizar una transición fluida y eficiente. Este proceso demuestra nuestro compromiso con la transparencia, la satisfacción del cliente y la excelencia en la entrega de proyectos.",
      };
    },
  };
  </script>
  
  <style scoped>
  .subtitle-link {
    color: #000000;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .subtitle-link:hover {
    color: orange; 
  }
  
  .text-justify {
    text-align: justify;
  }

  .tools-title {
  color: orange;
  font-weight: bold;
}
  </style>
  