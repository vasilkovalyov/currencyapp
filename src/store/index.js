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
    apiKey: "f31c79dae7dab78f7b62b8a6b44900eb431a6e2ea8a5cc8e2fe70fddc9bec46c",
    currencyList: ["UAH", "USD", "RUB"],
    currentCryptoCurrency: [],
    currentCurrency: "UAH",
    coinObjects: []
  },
  mutations: {
    setCurrentCryptoCurrency(store, payload) {
      store.currentCryptoCurrency = payload;
    },
    setCurrentCurrency(store, payload) {
      store.currentCurrency = payload;
    },
    addCoinObj(store, obj) {
      store.coinObjects.push(obj);
    },
    SET_COINTS(store, payload) {
      store.currentCryptoCurrency.push(payload);
    }
  },
  actions: {
    loadCoint({ commit }) {
      this.state.currencyCryptoList.forEach(item => {
        fetch(
          "https://min-api.cryptocompare.com/data/price?fsym=" +
            item.name +
            "&tsyms=USD,UAH,RUB"
        )
          .then(response => response.json())
          .then(data => {
            commit("SET_COINTS", {
              coinKey: Object.keys(data),
              coinValue: Object.values(data)
            });
          });
      });
    }
  },
  modules: {}
});
