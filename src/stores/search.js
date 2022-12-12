import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const searchText = ref("ddddd");
  function changeSearchText(ev) {
    console.log(ev);
    searchText.value = ev.target.value;
  }

  return { searchText, changeSearchText };
});
