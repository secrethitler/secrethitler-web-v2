<template>
  <div>
    <page-title>Veto requested</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <h3 class="font-serif text-2xl mb-4">{{ chancellor.userName }} has requested a veto!</h3>
        <p>If you accept, no policy will be enacted this round.</p>

        <div class="flex -mx-4 mt-8">
          <div class="px-4">
            <button class="btn shadow" @click="accept(true)">Accept Veto</button>
          </div>
          <div class="px-4">
            <button class="btn shadow" @click="accept(false)">Decline Veto</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import acceptVeto from '@/actions/acceptVeto';
import { Member } from '../types/game';

@Component({
  computed: mapGetters(['chancellor']),
})
export default class GameVetoRequested extends Vue {
  chancellor!: Member;

  // eslint-disable-next-line class-methods-use-this
  accept(accepted: boolean) {
    acceptVeto(accepted);
  }
}
</script>
