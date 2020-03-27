<template>
  <div>
    <page-title>You have been executed</page-title>

    <div class="container flex flex-col justify-start items-center py-16 px-8">

      <div class="max-w-4xl">
        <img src="@/assets/skull.png" alt="Skull" />
      </div>

      <div class="flex justify-center py-4">
        <button
          class="btn shadow"
          @click="goBack"
        >Back</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import navigateTo from '../utils/navigateTo';
import Route from '../types/route';

@Component
export default class GameIsKilled extends Vue {
  // eslint-disable-next-line class-methods-use-this
  goBack() {
    navigateTo(Route.GameInfo);
  }
}
</script>
