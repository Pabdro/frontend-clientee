<template>
    <nav
      class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
      style="height: 85px"
      :class="{ transparent: isTransparent }"
    >
      <a class="navbar-brand" href="#inicio">
        <img
          src="../assets/machine_learning-removebg-preview.png"
          alt="Logo"
          width="auto"
          height="40"
          class="m-3"
        />
      </a>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto text">
          <li class="nav-item">
            <a class="nav-link text-white" href="#inicio">Principal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#descripcion">Descripción</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link text-white" href="#fases">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#planificacion">Planificacion</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link text-white" href="#division">Division</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#mockups">Mockups</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#pruebas">Pruebas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#cierre">Cierre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#manual">Productos</a>
          </li>
        </ul>
      </div>
      <a
        href="https://wa.me/59162426763"
        target="_blank"
        class="navbar-text m-3 d-flex justify-content-end text-white"
      >
        <img
          src="../assets/titulo_machinelearning-removebg-preview.png"
          alt="WhatsApp"
          width="auto"
          height="55"
        />
      </a>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isTransparent: true,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isTransparent = window.pageYOffset === 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: rgba(0, 0, 0, 0.85) !important;
    transition: background-color 0.3s ease;
  }
  
  .transparent {
    background-color: transparent !important;
  }
  
  .text-white {
    color: white !important;
  }
  
  .text-black {
    color: black !important;
  }
  </style>