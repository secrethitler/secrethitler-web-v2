<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Pirata+One|Roboto+Slab|Roboto:400,400i,700,900&display=swap");

body {
  @apply antialiased bg-gray-100 font-sans;
}

::selection {
  @apply bg-red-900 text-white;
}

@tailwind base;
@tailwind components;

.btn {
  @apply bg-white font-sans border-4 border-white text-red-600 uppercase;
  @apply font-bold tracking-wider py-3 px-5 leading-none text-center;

  transition: all 0.3s ease;

  @screen lg {
    @apply text-lg px-6 py-4;
  }
  &:hover {
    @apply border-yellow-200 bg-yellow-200;
  }
  &.btn--red {
    @apply text-white bg-red-600 border-red-600;
    &:hover {
      @apply bg-red-800 border-red-800;
    }
  }
  &.btn--secondary {
    @apply bg-transparent text-white;
  }
  &.btn--fancy {
    @apply relative overflow-hidden;
    &::before {
      content: "";
      @apply h-full w-full absolute inset-0 bg-white z-0;
      transition: all 0.3s ease;
      transform: translateX(-100%);
    }
    span {
      @apply relative;
      z-index: 2;
    }
    &:hover {
      @apply text-red-600;
      &::before {
        @apply bg-yellow-200;
        transform: translate(0);
      }
    }
  }
}

@import "~nprogress/nprogress.css";

body #nprogress {
  .bar {
    background: none;
    background-color: theme("colors.yellow.400");
  }
  .peg {
    box-shadow: 0 0 10px theme("colors.yellow.400"),
      0 0 5px theme("colors.yellow.400");
  }
  .spinner .spinner-icon {
    border-top-color: theme("colors.yellow.400");
    border-left-color: theme("colors.yellow.400");
  }
}

@tailwind utilities;
</style>
