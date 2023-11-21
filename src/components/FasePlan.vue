<template>
  <section id="planificacion" class="pt-5 pb-5">
    <div class="container">
      <h2 class="text-center mb-4 title">Planificación</h2>

      <div class="row">
        <div class="col-md-4">
          <div class="plan-section">
            <h4 class="plan-subtitle">
              <a href="https://www.canva.com/design/DAF0utTPVIY/odgsQk7JfsYDxiI56GHyEg/edit" class="plan-link" target="_blank">Cronogramas</a>
            </h4>
            <p class="text-justify">La elaboración y seguimiento de un cronograma en entornos de trabajo en equipo son fundamentales para garantizar la organización, eficiencia y éxito de los proyectos. Un cronograma bien estructurado proporciona una visión clara de las tareas, plazos y responsabilidades, permitiendo una asignación efectiva de recursos y una gestión proactiva de posibles obstáculos. Además, facilita la comunicación entre los miembros del equipo al establecer expectativas claras sobre las fechas de entrega y hitos clave. La colaboración se optimiza cuando todos comparten una comprensión común de las metas y plazos, fomentando la sinergia y el compromiso colectivo.</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="plan-section">
            <h4 class="plan-subtitle">
              <a href="https://docs.google.com/document/d/15LL6e6nwrKFjX9ldhku1voRo3fRdz4Tqc7aFXgp1yTQ/edit" class="plan-link" target="_blank">Plan del Proyecto</a>
            </h4>
            <p class="text-justify">El proyecto de desarrollo de una plataforma de e-learning para ROMMOS S.R.L. se enfoca en ofrecer cursos y capacitaciones en áreas clave a nivel nacional, inicialmente en los departamentos de Santa Cruz, Cochabamba y La Paz. La plataforma, con dominio ".edu.bo," limitará a 10 estudiantes por curso y asignará un docente por curso. Se destacan características como cuentas institucionales con 1 Terabyte de almacenamiento, una tasa de transferencia de 5000 Megabytes, y una plataforma de pago integrada. El diseño incluirá una interfaz intuitiva, secciones de cursos, asesorías legales, y chat de ayuda. El plan de proyecto detalla una programación, asignación de tareas, recursos y un presupuesto estimado.</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="plan-section">
            <h4 class="plan-subtitle">
              <a href="https://docs.google.com/document/d/1shRiVNCXv6FrF0xLGWZKK6cBsDmNkZAFhg474D8YVUY/edit" class="plan-link" target="_blank">Comparaciones</a>
            </h4>
            <p class="text-justify">La integración efectiva de herramientas como Figma y Trello en procesos de desarrollo y gestión de proyectos es fundamental para optimizar la colaboración y mejorar la eficiencia. Figma, una plataforma de diseño colaborativo, destaca por su interfaz intuitiva y capacidad para permitir a los equipos trabajar simultáneamente en proyectos de diseño, facilitando la creación, revisión y ajuste de prototipos de manera fluida. Por otro lado, Trello, una herramienta de gestión de proyectos basada en tableros, ofrece una visualización clara de tareas y avances, mejorando la planificación y asignación de actividades. La combinación de Figma y Trello proporciona un flujo de trabajo sinérgico.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FasePlan",
};
</script>

<style scoped>
#planificacion {
  background-color: #f4f4f4;
}

.plan-section {
  text-align: center;
  margin-bottom: 20px;
}

.plan-subtitle {
  font-size: 18px;
  margin-bottom: 10px;
}

.title {
  color: orange;
  font-weight: bold;
}

.plan-link {
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.plan-link:hover {
  color: orange;
}

.text-justify {
  text-align: justify;
}
</style>
