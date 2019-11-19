<template>
  <ul class="type-currency-list text-uppercase list-unstyled d-flex justify-content-center">
    <li
      class="type-currency mx-4 p-2"
      v-for="item in getCurrencysType"
      :key="item"
      :class="{ active: currentConverCoin() === item }"
      @click="select(item)"
    >
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setCurrentCoinConvert"]),
    ...mapState(["currentConverCoin"]),

    select(value) {
      this.setCurrentCoinConvert(value);
    }
  },

  computed: {
    ...mapGetters(["getCurrencysType"])
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
