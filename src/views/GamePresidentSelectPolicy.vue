<template>
  <div>
    <page-title>Discard Policy</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <div class="mb-4">
          <h3 class="font-serif text-2xl mb-4">Select a policy to discard.</h3>
          <p>The 2 remaining policies will be presented to the elected chancellor ({{ chancellor.userName }}).</p>
        </div>

        <div
          v-if="policies.length > 0"
          class="flex"
          :class="{ 'pointer-events-none': discarding, 'opacity-50': discarding }"
        >
          <div v-for="(policy, index) in policies" :key="index" class="px-2 w-full lg:w-1/3">
            <div v-if="policy == Policy.Liberal" @click="discard(policy)">
              <img src="@/assets/policy_liberal.jpg" alt="Liberal Policy" />
            </div>
            <div v-if="policy == Policy.Fascist" @click="discard(policy)">
              <img src="@/assets/policy_fascist.jpg" alt="Fascist Policy" />
            </div>
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
import { Policy, Round } from '@/types/game';
import presidentPolicyPick from '@/actions/presidentPolicyPick';

type Data = {
  discarding: boolean;
  Policy: typeof Policy;
};

@Component({
  computed: mapGetters(['chancellor', 'members', 'activeRound']),
})
export default class GamePresidentSelectPolicy extends Vue {
  discarding = false;

  Policy = Policy;

  activeRound!: Round;

  get policies() {
    return this.activeRound.secret.presidentPolicies;
  }

  async discard(policy: Policy) {
    this.discarding = true;

    try {
      await presidentPolicyPick(policy);

      this.$gtag.event('game', {
        event_category: 'president-pick-policy',
        event_label: this.$store.getters.channelName,
      });
    } catch (e) {
      this.discarding = false;
    }
  }
}
</script>
