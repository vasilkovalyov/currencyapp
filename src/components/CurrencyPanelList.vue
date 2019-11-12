<template>
  <div>
    <div class="currency-panel-list mb-3">
      <div class="row flex-wrap justify-content-center">
        <div class="col-12 col-md-6 col-lg-4" v-for="currency in currencys" :key="currency.id">
          <currency-card-item :currency="currency"></currency-card-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CurrencyCardItem from "./CurrencyCardItem";
export default {
  data() {
    return {
      currencys: this.$store.state.currencyCryptoList
    };
  },
  components: {
    CurrencyCardItem
  }
};
</script>