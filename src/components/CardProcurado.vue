<script>
export default {
  props: {
    procurado: {
      type: Object,
    },
  },
};
</script>
<template>
  <div class="onecard">
    <img
      class="imgproc"
      :src="procurado.images[0].original"
      onerror="this.src = 'https://cdn.discordapp.com/attachments/976322101818560562/1022715221099421736/silhueta-cinzenta-de-pessoa-anonima-com-ponto-interrogacao-sobre-fundo-branco-conceito-desconhecida-na-web-163956120.jpg'"
    />
    <div class="name">
      <h4>{{ procurado.subjects[0] }}</h4>
      <p>{{ procurado.title }}</p>
    </div>
  </div>
</template>
<style>

</style>
