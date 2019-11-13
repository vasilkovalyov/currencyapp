<template>
  <div class="currency-card-item py-4 px-3 mb-4" @click="selectCard" :data-currency="currency.id">
    <div class="row">
      <div class="col-5">
        <div class="image-holder text-center mb-2">
          <img :src="currency.img" :alt="currency.name" />
        </div>
        <span class="coin-name d-block text-center">{{ currency.name }}</span>
      </div>
      <div class="col-7">
        <ul class="currency-list list-unstyled">
          <coin v-for="coin in cryptoCoins" :key="coin.id" :coin="coin">
          </coin>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Coin from "./Coin";

export default {
  props: {
    currency: {
      coinObject: Object,
      default: "BTC"
    }
  },
  data() {
    return {
      cryptoCoins: this.$store.state.cryptoCoins,
    }
  },
  methods: {
   selectCard() {

   }
  },
  mounted() {
    console.log(this.$store.state.cryptoCoins)
  },
  components: {
    Coin
  }
};
</script>
<style lang="scss">
@import "../scss/style";

.currency-card-item {
  background-color: $blue;

  &:hover {
    cursor: pointer;
  }
}
</style>
