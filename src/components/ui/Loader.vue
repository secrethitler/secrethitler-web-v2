<template>
  <div class="loader flex justify-center py-4">
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  & > div {
    border: 4px solid theme("colors.red.700");
    border-top-color: transparent;
    animation-name: spin;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 0.6s;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
