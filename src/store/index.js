import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencyCryptoList: [
      {
        id: 1,
        img: "./images/BTC.png",
        name: "BTC"
      },
      {
        id: 2,
        img: "./images/ETH.png",
        name: "ETH"
      },
      {
        id: 3,
        img: "./images/XRP.png",
        name: "XRP"
      }
    ],
    convertToCoinsList: ["UAH", "USD", "RUB"],
    currentConverCoin: 'UAH',
    coins: [],
    selectedCoin: {}
  },

  mutations: {
    setCurrentCoinConvert(store, payload) {
      store.currentConverCoin = payload
    },

    setCoins(state, payload) {
      state.coins = payload;
    },

    selectCoin(state, payload) {
      state.selectedCoin = payload;
    },

    selectConvertCoin(state, payload) {
      state.currentConverCoin = payload;
    }
  },
  actions: {
    async loadCoins(state) {
      const resCoin = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,UAH,RUB");
      const coins = await resCoin.json();
      this.coins = coins;
      state.commit('setCoins', coins);
      state.commit('selectCoin', 'BTC')
    },
    setSelectedTypeCurrency(state) {
      state.commit('selectConvertCoin', 'UAH')
    }
  },
  getters: {
    getCryptoInfo(state) {
      return state.currencyCryptoList;
    },
    getCurrencysType(state) {
      return state.convertToCoinsList;
    },
    getAllCoins(state) {
      return state.coins
    },
    getSelectedCoin(state) {
      return state.selectedCoin
    },
    getCurrentConvertCurrency(state) {
      return state.currentConverCoin;
    },
    getCurrentCurrencyValue(state) {
      let currentConverCurrency = state.currentConverCoin;
      const arrayCoins = state.coins[state.selectedCoin]

      for(let i in arrayCoins) {
        if(i == currentConverCurrency) {
          return arrayCoins[i]
        }
      }
    }
  }
});
