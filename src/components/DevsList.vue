<template>
  <div>
    <div class="devs-list">
      <a
        v-for="el in getFilteredDevs"
        :href="`/details/${el.id}`"
        :key="el.id"
        class="devs-item"
      >
        <div class="devs-item__photo">
          <div
            class="devs-item__photo-inner"
            :style="`background-image: url(https://via.placeholder.com/350x150)`"
          ></div>
          <div
            :class="{
              'devs-item__photo-label': true,
              _blue: el.type === 'IndependentLiving',
              _orange: el.type === 'SupportAvailable',
            }"
          >
            {{
              el.type === "IndependentLiving"
                ? "Independent living"
                : "Support Available"
            }}
          </div>
        </div>
        <div class="devs-item__meta">
          <div class="devs-item__name">{{ el.title }}</div>
          <div class="devs-item__address">{{ el.address }}</div>
          <div class="devs-item__price">
            New Properties for Sale from
            <span>£{{ formatPrice(el.price) }}</span>
          </div>
          <div class="devs-item__label">Shared Ownership Available</div>
        </div>
      </a>
    </div>
    <div class="devs-more">
      <button class="devs-more__button">See more <icon-chevron /></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import IconChevron from "@/assets/icons/IconChevron.vue";

export default {
  name: "DevsList",
  components: {
    IconChevron,
  },
  props: {
    filter: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["getDevs"]),
    getFilteredDevs() {
      if (this.filter.length >= 3) {
        return this.getDevs.filter((el) => {
          return el.title.toLowerCase().includes(this.filter.toLowerCase());
        });
      } else {
        return this.getDevs;
      }
    },
  },
  methods: {
    formatPrice(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped>
.devs-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 40px 20px;
}
.devs-item {
  display: block;
  background: #f8f8f8;
  border: 1px solid #d8d8d8;
  &__photo {
    position: relative;
    height: 228px;
    background-color: #f2f2f2;
    overflow: hidden;
  }
  &__photo-inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }
  &__photo-label {
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    padding: 7px 10px;
    z-index: 2;
    background: #f2f2f2;
    &._blue {
      background: #006f79;
    }
    &._orange {
      background: #ec6608;
    }
  }
  &__meta {
    padding: 20px;
  }
  &__name {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 2px;
  }
  &__address {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 15px;
  }
  &__price {
    line-height: 22px;
    span {
      font-weight: 700;
    }
  }
  &__label {
    margin-top: 7px;
    font-size: 14px;
    line-height: 19px;
  }
  &:hover {
    .devs-item__photo-inner {
      transform: scale(1.1);
    }
  }
}
.devs-more {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #363636;
    font-family: "Open Sans", Arial, sans-serif;
    min-width: 150px;
    height: 50px;
    border: 1px solid #d8d8d8;
    border-radius: 25px;
    background-color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    transition: all 0.3s ease;
    cursor: pointer;
    svg {
      position: relative;
      margin-left: 10px;
      transition: all 0.3s ease;
    }
    &:hover {
      background-color: #f2f2f2;
      svg {
        transform: translateX(-4px);
      }
    }
  }
}
</style>
