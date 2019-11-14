<template>
  <section id="app" class="section-app d-flex align-items-center">
    <div class="section-inner-holder d-flex align-items-center">
      <div class="container">
        <currency-panel-list></currency-panel-list>
        <span
          class="current-currency-msg d-block text-center mb-3"
        >Selected coin: {{selectedCoin}}</span>
        <form-input-currency @inputValue="inputValue = $event"></form-input-currency> 
        <type-currency-list></type-currency-list>
        <span
          class="result-msg d-block text-center mb-3"
        >{{inputValue}} {{selectedCoin}} will be {{inputValue * getCurrencyValue}} in {{getCurrentCurrency}}</span>
      </div> 
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import CurrencyPanelList from "./components/CurrencyPanelList";
import FormInputCurrency from "./components/FormInputCurrency";
import TypeCurrencyList from "./components/TypeCurrencysList";

export default {
  data() {
    return {
      inputValue: ""
    };
  },

  async mounted() {
    this.$store.dispatch("loadCoins");
    this.$store.dispatch("setSelectedTypeCurrency")
    
  },

  computed: {
    allCoins() {
      return this.$store.getters.getAllCoins;
    },

    selectedCoin() {
      return this.$store.getters.getSelectedCoin;
    },

    getCurrentCurrency() {
      return this.$store.getters.getCurrentConvertCurrency;
    },

    getCurrencyValue() {
      return this.$store.getters.getCurrentCurrencyValue;
    }
  },
  
  components: {
    CurrencyPanelList,
    FormInputCurrency,
    TypeCurrencyList
  }
};
</script>

<style lang="scss">
@import "./scss/style";
.section-app {
  background-color: $dark-blue;
  color: $light-blue;
}
.section-inner-holder {
  width: 100%;
  min-height: 100vh;
  display: flex;
}
.current-currency-msg {
  font-size: 1.5rem;
}
.result-msg {
  color: $green;
}
</style>
