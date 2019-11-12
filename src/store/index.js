import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyList: [
      {id: 1, img: './images/BTC.png', name: 'BTC'},
      {id: 2, img: './images/ETH.png', name: 'ETH'},
      {id: 3, img: './images/XRP.png', name: 'XRP'},
    ],
    localCurrencyList: ['UAH','USD','RUB'],
    currentCurrency: 'BTC',
    currentLocalCurrency: 'UAH'
  },
  mutations: {
    setCurrentCurrency(store, payload) {
      store.currentCurrency = payload;
    },
    setCurrentLocalCurrency(store, payload) {
      store.currentLocalCurrency = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
