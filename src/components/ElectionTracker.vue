<template>
  <div class="election-tracker absolute bottom-0 left-0 right-0">
    <div class="relative">
      <div class="cross" :style="getStyle">
        <XIcon class="text-red-700" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { XIcon } from 'vue-feather-icons';

export default {
  components: {
    XIcon,
  },
  computed: {
    ...mapGetters(['electionTracker']),
    getStyle() {
      return {
        left: `${this.electionTracker * 26.25 + 4.4}%`,
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
    box-sizing: border-box;
    @apply p-1 absolute;
    top: -1.2rem;
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
