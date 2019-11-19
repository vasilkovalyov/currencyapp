<template>
  <section id="app" class="section-app d-flex align-items-center">
    <div class="section-inner-holder d-flex align-items-center">
      <div class="container">
        <currency-panel-list></currency-panel-list>
        <span
          class="current-currency-msg d-block text-center mb-3"
        >Selected coin: {{selectedCoinName}}</span>
        <form-input-currency></form-input-currency> 
        <type-currency-list></type-currency-list>
        <p class="result-msg d-block text-center mb-3"> 
          <span v-html='getInputValue' /> 
          <span v-html='selectedCoinName' /> will be
          <span v-html='getResult'/>  in
          <span v-html='getCurrentConvertCurrency' />
        </p>
        {{selectedCoinName}}
      </div> 
    </div>
  </section>
</template>

<script>
import CurrencyPanelList from "./components/CurrencyPanelList";
import FormInputCurrency from "./components/FormInputCurrency";
import TypeCurrencyList from "./components/TypeCurrencysList";

import { mapGetters} from "vuex"

export default {
  mounted() {
    this.$store.dispatch("loadCoins");
    this.$store.dispatch("setSelectedTypeCurrency");
  },

  computed: {
    ...mapGetters(['getAllCoins','getSelectedCoin','getCurrentConvertCurrency','getCurrentCurrencyValue', 'getInputValue', 'getResult']),

    selectedCoinName() {
      return this.getSelectedCoin.coinName;
    },
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
