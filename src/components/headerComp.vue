<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useSearchStore } from "@/stores/search";

export default {
  computed: {
    ...mapStores(useSearchStore),
    ...mapState(useSearchStore, ["searchText"]),
  },
  methods: {
    ...mapActions(useSearchStore, ["changeSearchText"]),
  },
};
</script>
<template>
  <header>
    <div class="header"></div>
    <span class="pessoasproc">Pessoas mais procuradas</span>
    <div class="logo">
      <a href="">
        <router-link class="fbi" to="/">
          <span class="fontlogo">FBI</span>
        </router-link>
      </a>
    </div>
    <div class="submit-line">
      <input
        type="text"
        placeholder="Pesquisar FBI"
        :value="searchText"
        @keyup="changeSearchText"
      />
      <button class="submit-lente" type="submit">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </header>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
.fa-search {
  cursor: pointer;
}
.submit-lente {
  position: absolute;
  top: 6px;
  right: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
}

.submit-line {
  position: relative;
  width: 200px;
}

.submit-line input {
  padding: 3px;
  width: 100%;
}

.fontlogo {
  color: #fff;
  font-size: 2.4em;
  font-family: "Arial Black", sans-serif, Arial, Helvetica;
  font-weight: bolder;
}
header span {
  padding: 0 480px;
}
.pessoasproc {
  padding: 0;
  cursor: pointer;
}
.pesquisa input {
  padding: 3px;
  outline: none;
}
header {
  background-color: #000;
  box-shadow: 0 0 24px 0 rgb(0, 0, 0);
  height: 24%;
  font-size: 1.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
}
.views {
  margin: 0 auto;
}
</style>
