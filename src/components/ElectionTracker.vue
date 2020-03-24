<template>
  <div class="election-tracker absolute bottom-0 left-0 right-0">
    <div class="relative">
      <div class="cross" :style="getStyle">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['electionTracker']),
    getStyle() {
      return {
        left: `${this.electionTracker * 26.25 + 3.5}%`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.election-tracker {
  padding-left: 27%;
  padding-right: 27%;
  padding-top: 3%;
  padding-bottom: 3%;

  .cross {
    height: 1rem;
    width: 1rem;
    box-sizing: border-box;
    @apply p-1 absolute;
    top: -0.5rem;
  }

  span {
    height: 2px;
    width: 1rem;
    @apply bg-red-600 absolute;

    &:first-child {
      transform: rotate(45deg);
    }

    &:last-child {
      transform: rotate(-45deg);
    }
  }
}
</style>
