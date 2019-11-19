<template>
  <div>
    <div class="currency-panel-list mb-3">
      <div class="row flex-wrap justify-content-center">
        <div class="col-12 col-md-6 col-lg-4" v-for="currency in getCryptoInfo" :key="currency.id">
          <currency-card-item :currency="currency" :coins="{coinName:Object.keys(getAllCoins)[currency.id-1 ], coinValue: getAllCoins[currency.name]}"></currency-card-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CurrencyCardItem from "./CurrencyCardItem";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['getCryptoInfo', 'getAllCoins'])
  },

  components: {
    CurrencyCardItem
  }
};
</script>