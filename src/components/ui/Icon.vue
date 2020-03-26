<template>
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="getViewBox" :class="getClass">
        <path :d="getPath" />
    </svg>
</template>

<script>
import { faCrown, faTimes } from '@fortawesome/free-solid-svg-icons';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    getIcon() {
      const icons = {
        crown: faCrown,
        times: faTimes,
      };

      const { icon } = icons[this.icon];

      return {
        width: icon[0],
        height: icon[1],
        svgPathData: icon[4],
      };
    },
    getViewBox() {
      return `0 0 ${this.getIcon.width} ${this.getIcon.height}`;
    },
    getPath() {
      return this.getIcon.svgPathData;
    },
    getClass() {
      return [
        'icon',
        `icon-${this.icon}`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
    @apply fill-current;
    width: 1em;
}
</style>
