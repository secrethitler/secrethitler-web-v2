<template>
  <div>
    <page-title>Discard Policy</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <div class="mb-4">
          <h3 class="font-serif text-2xl mb-4">Select a policy to enact. The other one will be discarded.</h3>
        </div>

        <div class="flex" :class="{ 'pointer-events-none': discarding, 'opacity-50': discarding }">
          <div v-for="(policy, index) in policies" :key="index" class="px-2 w-full lg:w-1/2">
            <div v-if="policy === Policy.Liberal" @click="enact(index)">
              <img src="../assets/policy_liberal.jpg" alt="Liberal Policy" />
            </div>
            <div v-if="policy === Policy.Fascist" @click="enact(index)">
              <img src="../assets/policy_fascist.jpg" alt="Fascist Policy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';
import chancellorPolicyPick from '@/actions/chancellorPolicyPick';
import { Round, Policy } from '../types/game';

@Component({
  computed: mapGetters(['activeRound']),
})
export default class GameChancellorSelectPolicy extends Vue {
  discarding = false;

  Policy = Policy;

  activeRound!: Round;

  get policies(): Policy[] {
    return this.$store.getters.activeRound.secret.chancellorPolicies;
  }

  enact(index: number) {
    const discardedIndex = index === 0 ? 1 : 0;

    this.discard(this.policies[discardedIndex]);
  }

  discard(discardedPolicy: Policy) {
    this.discarding = true;

    try {
      chancellorPolicyPick(discardedPolicy);
    } catch (e) {
      this.discarding = false;
    }
  }
}
</script>