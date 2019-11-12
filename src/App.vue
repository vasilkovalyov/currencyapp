<template>
  <section id="app" class="section-app d-flex align-items-center">
    <div class="section-inner-holder d-flex align-items-center">
     <div class="container">
       <currency-panel-list></currency-panel-list>
       <span class="current-currency-msg d-block text-center mb-3">Selected coin: {{ showCurrentCurrency() }}</span>
       <form-input-currency v-model="parentValue"></form-input-currency>
       <type-currency-list></type-currency-list>
       <span class="result-msg d-block text-center mb-3">{{parentValue}} {{ showCurrentCurrency() }} will be "sum" in {{showCurrentLocalCurrency()}}</span>
     </div>
    </div>
  </section>
</template>

<script>
import CurrencyPanelList from './components/CurrencyPanelList';
import FormInputCurrency from './components/FormInputCurrency';
import TypeCurrencyList from './components/TypeCurrencysList';
export default {
  data() {
    return {
      parentValue:'0'
    }
  },
  methods: {
      showCurrentCurrency() {
          return this.$store.state.currentCurrency;
      },
      showCurrentLocalCurrency() {
        return this.$store.state.currentLocalCurrency;
      }
  },

  components: {
     CurrencyPanelList,
     FormInputCurrency,
     TypeCurrencyList
  }
}
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
