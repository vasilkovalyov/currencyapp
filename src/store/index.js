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
    convertToCoinsList: ["USD", "UAH", "RUB"],
    currentConverCoin: 'UAH',
    coins: [],
    selectedCoin: {},
    convertResult: 0,
    inputValue: ''
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
    },

    setInputValue(state, payload) {
      state.inputValue = payload;
    }
  },

  actions: {
    loadCoins(store) {
      const arrayConvertCurrency = store.state.convertToCoinsList.join(',');
      const arrayCryptoCoins = store.state.currencyCryptoList.map((item) => item.name).join(',');

      Vue.axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms='+arrayCryptoCoins+'&tsyms='+arrayConvertCurrency)
        .then(response => response.data)
        .then(data => {
          store.commit('setCoins', data);
          const selectedObject = {coinName:Object.keys(store.getters.getAllCoins)[0], coinValue:Object.values                                     (store.getters.getAllCoins)[0]}
          store.commit('selectCoin', selectedObject);
        })
        .catch(error => error);
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
    },
    getConvertCurrency(state) {
      return state.currentConverCoin;
    },
    getResult(state, getters) {
      const array = getters.getSelectedCoin.coinValue;
      const curConvert = getters.getConvertCurrency;
      const inputValue = getters.getInputValue;
      for(let item in array) {
        if(item == curConvert) {
          return inputValue * array[item];
        }
      }
    },
    getInputValue(state) {
      return state.inputValue;
    }
  }
});
