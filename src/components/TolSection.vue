<template>
  <section id="herramientas">
    <div class="pt-5 pb-5">
      <div class="container">
        <h2 class="text-center mb-4 tools-title">Herramientas</h2>
        <div class="row justify-content-center mt-5">
          <div v-for="card in cards" :key="card.id" class="col-md-4">
            <div class="card-wrapper" @mouseover="toggleOverlay(card.id)" @mouseleave="toggleOverlay(card.id)">
              <div class="card mb-4">
                <div class="img-wrapper">
                  <img
                    :src="card.imageSrc"
                    :alt="card.imageAlt"
                    class="card-img-top custom-img"
                  />
                  <div v-show="card.hovered" class="img-overlay"></div>
                  <div class="card-hover-text" v-show="card.hovered">
                    <p>{{ card.hoverText }}</p>
                  </div>
                </div>
                <div class="card-body">
                  <p class="card-text bigger-text">{{ card.description }}</p>
                </div>
              </div>
            </div>
            <!-- Nuevo texto con hipervínculo debajo de cada tarjeta -->
            <div class="text-center mt-2">
              <a v-if="card.id === 1" href="https://www.figma.com/file/vKPXFYGaHc3PaVPHvje35N/MockupsRommos?type=design&node-id=0-1&mode=design&t=WnoEYYuApfYvs3Zk-0" class="docs-link" target="_blank">Nuestro Figma</a>
              <a v-if="card.id === 2" href="https://trello.com/invite/b/DAk7PrRj/ATTIa9b99d3cddd3ff8d0e1b2c1785182e916B458072/rommos-srl-proyecto " class="docs-link" target="_blank">Nuestro Trello</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          imageSrc: require("../assets/figma.png"),
          imageAlt: "Image 1",
          description: "Figma",
          hoverText: "Plataforma de diseño colaborativo, cuenta con prototipado y diseño de interfaces.",
          hovered: false,
        },
        {
          id: 2,
          imageSrc: require("../assets/trello.png"),
          imageAlt: "Image 2",
          description: "Trello",
          hoverText: "Herramienta de gestión de proyectos basada en tableros visuales.",
          hovered: false,
        },
      ],
    };
  },
  methods: {
    toggleOverlay(cardId) {
      this.cards.forEach((card) => {
        card.hovered = card.id === cardId;
      });
    },
  },
};
</script>

<style scoped>
/* Estilos de imagen y overlay */
.custom-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.img-wrapper {
  position: relative;
  overflow: hidden;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  border-radius: 40px;
  transition: opacity 0.3s ease;
}

.card-wrapper:hover .img-overlay {
  opacity: 1;
}

.card-hover-text {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.card-wrapper:hover .card-hover-text {
  display: block;
}

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
}

.card-body {
  padding: 10px;
}

.card-text {
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

.bigger-text {
  font-size: 24px;
  color: rgb(240, 98, 4);
  font-weight: bold;
}

/* Nuevo estilo para el enlace de la documentación */
.docs-link {
  color: #000000;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
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
