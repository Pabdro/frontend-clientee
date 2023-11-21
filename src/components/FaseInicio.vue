<template>
  <section id="fases">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6">
          <h1 class="display-6">
            <a href="https://docs.google.com/document/d/18xFhS7UbU3NRAcQl3P-hyqDi0STK8TWwDM0J0Cr78Ys/edit" class="title-link" target="_blank">Análisis de requisitos</a>
          </h1>
        </div>
        <div class="col-md-6">
          <p class="lead description text-justify">{{ description1 }}</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-6 order-md-2">
          <h1 class="text-md-end display-6">
            <a href="https://docs.google.com/document/d/1yJhnXKoTz5yqLCqDRYcaHKEwWvvJNQj-tuRh0YtwBIg/edit" class="title-link" target="_blank">Carta de inicio</a>
          </h1>
        </div>
        <div class="col-md-6 order-md-1">
          <p class="lead description text-justify">{{ description2 }}</p>
        </div>
      </div>
      <!-- Tercera sección -->
      <div class="row">
        <div class="col-md-6">
          <h1 class="display-6">
            <a href="https://docs.google.com/document/d/1bpf_Xv-4KJCMpJ-SlVyAXuFLIXcxf9Y5zYKLEB9J4EA/edit" class="title-link" target="_blank">Términos de referencia</a>
          </h1>
        </div>
        <div class="col-md-6">
          <p class="lead description text-justify">{{ description3 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      description1: "ROMMOS S.R.L. busca desarrollar una plataforma E-Learning integral con el propósito de ofrecer servicios en asesoramiento financiero, administrativo, legal y capacitación continua. Los objetivos incluyen garantizar la accesibilidad y usabilidad, ofrecer certificaciones, evaluar la efectividad mediante retroalimentación y establecer un cronograma de implementación. La planificación involucra reuniones con partes interesadas clave, identificación del equipo y formación de roles. Se evalúa la viabilidad con recursos existentes, co-work, y la necesidad de cuentas en Amazon Web Service. La misión es respaldar el desarrollo organizacional mediante una plataforma educativa robusta.",
      description2: "ROMMOS S.R.L., una empresa dedicada al asesoramiento financiero, administrativo y legal, busca inaugurar un emocionante proyecto de desarrollo: la creación de una plataforma E-Learning integral. Con el objetivo de ofrecer una amplia gama de cursos y recursos, la empresa aspira a brindar una experiencia educativa efectiva y accesible. El proyecto se centrará en la definición detallada del alcance, la identificación de partes interesadas clave, y la evaluación de la viabilidad, garantizando un enfoque integral y exitoso desde su inicio.",
      description3: "El proyecto liderado por ROMMOS S.R.L. tiene como objetivo principal desarrollar una plataforma de e-learning que ofrezca cursos en áreas clave como administración, finanzas, leyes e informática. Con un enfoque específico en la accesibilidad y usabilidad, se busca proporcionar una experiencia de aprendizaje efectiva. El alcance abarca desde la planificación y diseño del sitio web hasta la capacitación del personal y el soporte post-proyecto. Las limitaciones se centran en servicios específicos, y se detallan actividades clave, resultados esperados y el calendario de pagos, asegurando una comunicación regular y efectiva con todas las partes interesadas.",
    };
  },
};
</script>

<style scoped>
/* Estilos adicionales específicos si es necesario */

/* Estilo para el enlace del título */
.title-link {
  color: #000000;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.title-link:hover {
  color: orange; /* Cambia a naranja al pasar el ratón */
}

/* Agregar estilo para justificar texto */
.text-justify {
  text-align: justify;
}
</style>
