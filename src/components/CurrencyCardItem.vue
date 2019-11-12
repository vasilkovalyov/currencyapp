<template>
    <div class="currency-card-item py-4 px-3 mb-4" @click='selectCard' :data-currency="currency.name">
        <div class="row">
            <div class="col-5">
                <div class="image-holder text-center mb-2">
                    <img :src="currency.img" :alt="currency.name">
                </div>
                <span class="coin-name d-block text-center">{{currency.name}}</span>
            </div>
            <div class="col-7">
                <ul class="currency-list list-unstyled">
                    <li><b class="text-uppercase mr-3">usd</b>test coin</li>
                    <li><b class="text-uppercase mr-3">uah</b>test coin</li>
                    <li><b class="text-uppercase mr-3">rub</b>test coin</li>
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
            default: 'BTC'
        }
    },
    methods: {
        selectCard() {
            this.$store.commit('setCurrentCurrency', this.$el.getAttribute('data-currency'))
        }
    }
}
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