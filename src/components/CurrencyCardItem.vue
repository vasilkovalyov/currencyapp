<template>
  <div class="currency-card-item p-2 mb-2 py-md-4 px-md-3 mb-md-4" @click="selectTypeCoin" :data-currency="currency.name">
    <div class="row">
      <div class="col-5">
        <div class="image-holder text-center mb-2">
          <img :src="currency.img" :alt="currency.name" />
        </div>
        <span class="coin-name d-block text-center">{{ currency.name }}</span>
      </div>
      <div class="col-7">
        <ul class="currency-list list-unstyled" >
          <li v-for="(coin,key) in allCoins[currency.name]" :key='key'>
            <b class="mr-3">{{key}}</b> <span>{{coin}}</span>
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
      coinObject: Object
    }
  },
  
  data() {
    return {
      
    }
  },

  methods: {
    selectTypeCoin() {
      let coinType = this.$el.getAttribute('data-currency');
      this.$store.commit('selectCoin', coinType)
    }
  },

  computed: {
    allCoins() {
      return this.$store.getters.getAllCoins;
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

  .image-holder {
    img {
      @media (max-width: 480px) {
        width: 50%;
      }
    }
  }
}
</style>
