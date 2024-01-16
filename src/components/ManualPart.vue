<template>
  <section id="manual" class="pt-5 pb-5">
    <div class="catalogo">
      <h1 class="text-center mb-4 tools-title">Catálogo de Productos</h1>
      <input v-model="busqueda" placeholder="Buscar producto..." />
      <button @click="mostrarMas">Mostrar más</button>
      <button @click="mostrarMenos">Mostrar menos</button>
      <div class="producto" v-for="(producto) in productosFiltrados" :key="producto.id">
        <h2>{{ producto.name }}</h2>
        <p>{{ producto.description }}</p>
        <p>{{ producto.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      busqueda: '',
      limite: 5,
      productos: []
    }
  },
  computed: {
    productosFiltrados() {
      return this.productos
      .filter(producto => producto.name.toLowerCase().includes(this.busqueda.toLowerCase()))
      .slice(0, this.limite);
    }
  },
  methods: {
    mostrarMas() {
      this.limite += 5;
    },
    mostrarMenos() {
      this.limite -= 5;
    }
  },
  mounted() {
  fetch('http://localhost:8000/api/products')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data.data)) {
        this.productos = data.data;
      } else {
        console.error('Los datos devueltos por la API no son un array:', data);
        console.log(data.data)
      }
    });
  }
}
</script>

<style scoped>
.catalogo {
  width: 80%;
  margin: auto;
}

.producto {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.producto h2 {
  margin: 0 0 10px 0;
}

.producto p {
  margin: 0;
}

.tools-title {
  color: orange;
  font-weight: bold;
}
</style>