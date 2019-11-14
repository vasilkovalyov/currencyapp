<template>
  <div>
    <div class="currency-panel-list mb-3">
      <div class="row flex-wrap justify-content-center">
        <div class="col-12 col-md-6 col-lg-4" v-for="currency in getCryptoInfoArray" :key="currency.id">
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
      
    };
  },

  computed: {
    getCryptoInfoArray() {
      return this.$store.getters.getCryptoInfo
    }
  },

  mounted() {
    
  },

  components: {
    CurrencyCardItem
  }
};
</script>