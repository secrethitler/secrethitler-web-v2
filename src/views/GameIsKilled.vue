<template>
  <div>
    <page-title>You have been executed</page-title>

    <div class="container flex justify-center py-16 px-8">
      <div class="max-w-4xl">
        <img src="@/assets/skull.png" alt="Skull" />
      </div>
      <div class="flex justify-center py-4">
        <router-link
          class="btn shadow"
          :to="goBack"
        >Back</router-link>
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
