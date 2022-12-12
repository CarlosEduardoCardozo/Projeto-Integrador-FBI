<script>
export default {
  props: {
    procurado: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.procurado);
  },
};
</script>
<template>
  <div class="img">
    <img
      class="imgproc"
      :src="procurado.images[0].original"
      onerror="this.src = 'https://cdn.discordapp.com/attachments/976322101818560562/1022715221099421736/silhueta-cinzenta-de-pessoa-anonima-com-ponto-interrogacao-sobre-fundo-branco-conceito-desconhecida-na-web-163956120.jpg'"
    />
  </div>
  <div class="infos">
    <h2 class="name">{{ procurado.title }}</h2>
    <p class="desc">{{ procurado.description }}</p>
  </div>
  <div class="info2">
    <h2>Raça</h2>
    <p>{{ procurado.race || 0 }}</p>
    <h2>Cabelo</h2>
    <p>{{ procurado.hair || 0 }}</p>
    <h2>Cor dos olhos</h2>
    <p>{{ procurado.eyes || 0 }}</p>
    <h2>Sexo</h2>
    <p>{{ procurado.sex || 0 }}</p>
    <h2>Peso</h2>
    <p>{{ procurado.weight || 0 }}</p>
    <h2>Data de nascimento</h2>
    <p>{{ procurado.dates_of_birth_used || 0 }}</p>
  </div>
</template>
<style>
.infos h2 {
  width: 80%;
  color: #b68d4a;
}
.info2 {
  margin: 10% 0 0 -44%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 24%;
  flex-direction: column;
}
.info2 h2 {
  color: #b68d4a;
}
.desc {
  padding: 10px;
}
</style>
