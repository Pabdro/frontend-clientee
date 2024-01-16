<template>
  <section id="informacion">
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- Logo a la izquierda -->
          <div class="col-md-2">
            <img src="../assets/titulo_machinelearning-removebg-preview.png" alt="Logo" class="footer-logo" />
          </div>
          <div class="col-md-10">
            <div class="footer-section">
              <!-- Texto genérico -->
              <p class="footer-text">© 2023 Machine Learning. Todos los derechos reservados.</p>
              <p class="footer-text">Términos de Servicio | Política de Privacidad</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "FooterSection", // Cambié el nombre a "FooterSection"
};
</script>

<style>
.footer {
  background-color: #333;
  padding: 20px 0;
  color: #fff;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer .row {
  display: flex;
  align-items: center;
}

.footer-logo {
  max-width: 100%;
  height: auto;
}

.footer-section {
  text-align: center;
}

.footer-text {
  margin: 5px 0;
  font-size: 14px;
}

.footer-text a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-text a:hover {
  color: #bbb;
}
</style>
