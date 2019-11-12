<template>
  <div class="currency-card-item py-4 px-3 mb-4" @click="selectCard" :data-currency="currency.id">
    <div class="row">
      <div class="col-5">
        <div class="image-holder text-center mb-2">
          <img :src="currency.img" :alt="currency.name" />
        </div>
        <span class="coin-name d-block text-center">{{ currency.name }}</span>
      </div>
      <div class="col-7">
        <ul class="currency-list list-unstyled">
          <li>
            <b class="text-uppercase mr-3">{{ key[0] }}</b>
            {{value[0]}}
          </li>
          <li>
            <b class="text-uppercase mr-3">{{ key[1] }}</b>
            {{value[1]}}
          </li>
          <li>
            <b class="text-uppercase mr-3">{{ key[2] }}</b>
            {{value[2]}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currency: {
      type: Object,
      default: "BTC"
    }
  },
  data() {
    return {
      money: Object,
      key: "",
      value: ""
    };
  },
  created() {
    this.$http
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=" +
          this.currency.name +
          "&tsyms=USD,UAH,RUB"
      )
      .then(response => response.json())
      .then(data => {
        this.money = data;
        this.key = Object.keys(this.money);
        this.value = Object.values(this.money);
        this.$store.commit("addCoinObj", {
          coinKey: this.key,
          coinValue: this.value
        });
      });
  },
  methods: {
    selectCard() {
      const selectedObj = this.$store.state.currencyCryptoList[
        this.$el.getAttribute("data-currency") - 1
      ];
      console.log(selectedObj);
      this.$store.commit("setCurrentCryptoCurrency", selectedObj);
    }
  }
};
</script>
<style lang="scss">
@import "../scss/style";

.currency-card-item {
  background-color: $blue;

  &:hover {
    cursor: pointer;
  }
}
</style>
