<template>
    <section id="pruebas" class="pt-5 pb-5">
      <div class="container">
        <h2 class="text-center mb-4 tools-title">Pruebas</h2>
        <div class="row">
          <div class="col-md-12">
            <h4 class="subtitulo">
              <a href="https://docs.google.com/document/d/10bdrLp9hULEjDGDlJ2jcyJxstwbsF-kXtrh1rL9xIC0/edit" class="hipervinculo" target="_blank">Pruebas y Control de Calidad</a>
            </h4>
            <div class="texto">
              <p class="inicial-grande">
                En el contexto de ROMMOS S.R.L., la implementación de pruebas y control de calidad desempeña un papel esencial en el desarrollo y lanzamiento de productos y servicios. La empresa se compromete a mantener altos estándares de calidad en todos los aspectos de su operación, y las pruebas rigurosas se consideran una piedra angular en este compromiso. 
              </p>
              <p>
                El proceso de pruebas abarca desde la fase inicial de planificación hasta la implementación final, asegurando que cada componente del proyecto cumpla con los requisitos especificados y funcione de manera cohesiva en el conjunto. Se realizan pruebas exhaustivas de funcionalidad, rendimiento y seguridad, con el objetivo de identificar y abordar posibles problemas antes de que afecten a los usuarios finales. El equipo de control de calidad se esfuerza por garantizar la usabilidad, accesibilidad y compatibilidad en diversas plataformas, asegurando que los productos y servicios de ROMMOS S.R.L. brinden una experiencia óptima a sus clientes.
              </p>
              <p>
                Este enfoque meticuloso hacia las pruebas y el control de calidad refleja el compromiso de la empresa con la entrega de soluciones confiables y de alto nivel, respaldando su reputación como líder en su industria.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script>
  export default {
    name: "FasePrueba",
  };
  </script>
  
  <style scoped>
  #pruebas {
    background-color: #f9f9f9;
  }
  
  .subtitulo {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .hipervinculo {
    color: #010101;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .hipervinculo:hover {
    color: orange;
  }
  
  .texto {
    text-align: justify;
    line-height: 1.6;
  }
  
  .inicial-grande::first-letter {
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 4px;
  }
  .tools-title {
  color: orange;
  font-weight: bold;
}
  </style>
  