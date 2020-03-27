<template>
  <div>
    <page-title>Policy Peek</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <h3 class="font-serif text-2xl mb-4">You may look at the top 3 policies from the card pile!</h3>

        <div v-if="policies.length === 0 && showing === false" class="flex justify-center">
          <button class="btn" @click="getPeekedPolicies">Show Policies</button>
        </div>

        <div v-if="policies.length > 0" class="flex">
          <div v-for="(policy, index) in policies" :key="index" class="px-2 w-full lg:w-1/3 mb-4">
            <div v-if="policy === Policy.Liberal">
              <img src="../assets/policy_liberal.jpg" alt="Liberal Policy" />
            </div>
            <div v-if="policy === Policy.Fascist">
              <img src="../assets/policy_fascist.jpg" alt="Fascist Policy" />
            </div>
          </div>
        </div>

        <div v-if="policies.length > 0" class="flex justify-center py-4">
          <router-link
            class="btn shadow"
            :to="{ name: 'info', params: { id: $route.params.id } }"
          >Back</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import peekPolicies from '../actions/peekPolicies';
import { Round, Policy } from '../types/game';

@Component({
  computed: mapGetters(['activeRound']),
})
export default class GamePolicyPeek extends Vue {
  showing = false;

  activeRound!: Round;

  Policy = Policy;

  get policies(): Policy[] {
    return this.activeRound.secret.policyPeek;
  }

  getPeekedPolicies() {
    this.showing = true;
    try {
      peekPolicies();
    } catch (e) {
      this.showing = false;
    }
  }
}
</script>
