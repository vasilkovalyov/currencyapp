<template>
  <div class="form-input-currency d-flex justify-content-center">
    <div class="form-group d-flex align-items-baseline">
      <label for="input-currency">Volume:</label>
      <input
        type="text"
        id="input-currency"
        class="input-currency"
        v-model="inputValue"
        @input="changeValue"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    changeValue() {
      this.$emit("inputValue", this.inputValue);
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

  .input-currency {
    background-color: transparent;
    border: 1px solid $blue;
    padding: 5px;
    width: 300px;
    color: $light-blue;
  }
}
</style>