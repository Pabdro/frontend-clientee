<template>
  <section id="division">
    <div class="pt-5 pb-5">
      <div class="container">
        <h2 class="text-center mb-4 tools-title">Division</h2>
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
              <a v-if="card.id === 1" href="https://www.facebook.com/profile.php?id=100083152845774&sk=about" class="docs-link" target="_blank">Nuestro Facebook</a>
              <a v-if="card.id === 2" href="https://www.facebook.com/EROBOTBOLIVIA/" class="docs-link" target="_blank">Nuestro Facebook</a>
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
          imageSrc: require("../assets/drimec.jpg"),
          imageAlt: "Image 1",
          description: "Drimec",
          hoverText: "Consruccion y diseño maquinas industriales",
          hovered: false,
        },
        {
          id: 2,
          imageSrc: require("../assets/E-ROBOT.png"),
          imageAlt: "Image 2",
          description: "E-ROBOT",
          hoverText: "Cursos y materiales relacionados a la robótica y electrónica, Placas arduino, mini computadoras, raspberry pi, microcontroladores y software libre.",
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
