<template>
  <ul class="type-currency-list text-uppercase list-unstyled d-flex justify-content-center">
    <li
      class="type-currency mx-4 p-2"
      v-for="item in getCurrencysTypes"
      :key="item"
      :class="{ active: currentItem === item }"
      @click="select(item)"
    >
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      currentItem: "UAH"
    };
  },

  methods: {
    select(value) {
      this.currentItem = value;
      this.$store.commit("setCurrentCoinConvert", this.currentItem);
    }
  },

  computed: {
    getCurrencysTypes() {
      return this.$store.getters.getCurrencysType;
    }
  },

  mounted() {

  }
};
</script>
<style lang="scss" scoped>
@import "../scss/style";

.type-currency {
  transition: 0.3s background-color linear, 0.3s color linear;
  background-color: $blue;

  &.active {
    background-color: $green;
    color: $blue;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
