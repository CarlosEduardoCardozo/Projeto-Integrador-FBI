<script>
import axios from "axios";
import { onBeforeMount } from "vue";
import { mapActions, mapState, mapStores } from "pinia";
import { useSearchStore } from "@/stores/search";

import CardProcurado from "../components/CardProcurado.vue";

export default {
  components: { CardProcurado },
  data() {
    return {
      data: [],
      search: "",
    };
  },
  async created() {
    const { data } = await axios.get("https://api.fbi.gov/wanted/v1/list");
    this.data = data.items;
  },
  computed: {
    ...mapStores(useSearchStore),
    ...mapState(useSearchStore, ["searchText"]),
    filteredPosts() {
      return this.procurado.filter((cardsearch) =>
        cardsearch.items.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
<template>
  <div class="main">
    <div class="lista">
      <h2 class="txtprin">Procurados</h2>
      <hr />
      <!-- <h3>Filtrar: {{ searchText }}</h3> -->
    </div>
    <div class="card">
      <div v-for="procurado of data" :key="procurado.uid">
        <router-link
          class="router"
          :to="{ name: 'cadaVag', params: { id: procurado.uid } }"
        >
          <card-procurado :key="procurado.uid" :procurado="procurado" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  padding: 6%;
  margin-left: 4%;
  display: flex;
  flex-wrap: wrap;
}
.router {
  display: flex;
  flex-wrap: wrap;
  color: #0a0a12;
}
.name {
  font-family: Arial, Helvetica, sans-serif;

  width: 177px;
}

.onecard {
  font-size: 15px;
  background-color: rgb(240, 240, 240);
  border-radius: 15px;
  width: 210px;
  height: 370px;
  padding: 15px;
  margin: 0px 30px 60px 30px;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.438);
}
.onecard:hover {
  transform: scale(1.1);
  transition: 0.45s;
  background-color: rgb(222, 222, 223);
}
.onecard:hover {
  box-shadow: 0px 0px 50px 0 rgba(0, 0, 0, 0.438);
}
.onecard img {
  display: flex;
  width: 22px;
  border-radius: 15px;
  width: 100%;
  height: 75%;
}

.txtprin {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #0a0a12;
  font-size: 2em;
}

.link a {
  text-decoration: none;
  color: #0a0a12;
}

.categorias {
  display: flex;
  align-items: center;
  justify-content: center;
}

.categorias a {
  color: black;
}

.categorias span {
  margin: 0 4%;
}
</style>
