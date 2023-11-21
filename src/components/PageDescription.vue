<template>
  <section id="descripcion">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="display-6 title" style="text-align: justify; color: orange; font-weight: bold;">{{ title }}</h1>
        </div>
        <div class="col-md-6">
          <p class="lead description">{{ description }}</p>
        </div>
      </div>
      <div class="pt-4">
        <h1 class="text-center display-6">{{ subHeader }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Rommos S.R.L",
      description:
        "Se establece como un emprendimiento boliviano dedicado a brindar asesoramiento profesional en diversas áreas empresariales. Brindar asistencia integral y personalizada a todos nuestros clientes, mediante servicios de consultoría, asesoría y capacitación, con el fin de contribuir en la oportuna toma de decisiones. Se compromete a promover la cultura de valores profesionales en sus clientes.",
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  color: orange; 
  text-align: justify;
}

.description {
  font-weight: semi-bold;
  color: #747272; 
  text-align: justify;
}
</style>
