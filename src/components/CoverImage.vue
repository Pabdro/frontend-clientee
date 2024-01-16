<template>
  <section id="inicio">
    <div class="position-relative mb-5">
      <img
        class="img-fluid"
        src="../assets/titulo_machinelearning-verde.png"
        alt="Image Cover"
      />
      <div
        class="position-absolute bottom-0 start-0 p-3 text-white text-center"
        style="margin-top: -1rem"
      >
        <p class="display-5" style="color: #666; font-size: 2rem; font-weight: bold;">{{ imageSubtext }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageSubtext: "",
    };
  },
};
</script>

<style scoped>
.img-fluid {
  width: 100%;
  height: 300px;
}

</style>
