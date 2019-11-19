<template>
  <div class="form-input-currency d-flex justify-content-center">
    <div class="form-group d-sm-flex align-items-baseline">
      <label for="input-currency">Volume:</label>
      <input
        type="number"
        id="input-currency"
        class="input-currency"
        v-model="inputValue"
        @input="changeValue"
      />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    ...mapMutations(["setInputValue"]),
    changeValue() {
      this.setInputValue(this.inputValue);
    }
  }
};
</script>
<style lang="scss">
@import "../scss/style";
.form-input-currency {
  label {
    color: $green;
    margin-right: 15px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .input-currency {
    background-color: transparent;
    border: 1px solid $blue;
    padding: 5px;
    color: $light-blue;

    @media (min-width: 480px) {
      width: 300px;
    }
  }
}
</style>