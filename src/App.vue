<script setup>
import { useStore } from "vuex";
import { reactive, onMounted } from "vue";

import DevsList from "@/components/DevsList.vue";

const store = useStore();
const fetchDevs = () => {
  store.dispatch("fetchDevs");
};

const state = reactive({
  filter: "",
});

onMounted(fetchDevs);
</script>

<template>
  <div class="app">
    <div class="container">
      <h1 class="devs-title">Our Latest Developments</h1>
      <div class="devs-filter">
        <label class="devs-filter__label" for="filter">Filter</label>
        <input
          type="text"
          class="devs-filter__input"
          v-model="state.filter"
          id="filter"
        />
      </div>
      <devs-list :filter="state.filter" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  font-family: "Open Sans", Arial, sans-serif;
  color: #363636;
  font-weight: 400;
  font-size: 16px;
  background-color: #fff;
  padding: 36px 0 60px 0;
  min-height: 100vh;
}
.container {
  padding: 0 50px;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
}
.devs-title {
  text-align: center;
  margin-bottom: 43px;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  color: #45852d;
}
.devs-filter {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 45px;
  &__label {
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.3px;
    margin-right: 20px;
  }
  &__input {
    border: 1px solid #d8d8d8;
    border-radius: 25px;
    height: 50px;
    padding: 0 20px;
    font-family: "Open Sans", Arial, sans-serif;
    color: #363636;
    font-weight: 400;
    width: 100%;
    max-width: 418px;
    font-size: 18px;
  }
}
</style>
