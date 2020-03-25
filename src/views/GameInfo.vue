<template>
  <div>
    <page-title>Policies</page-title>

    <div class="container">
      <h3
        v-if="rounds.length > 0"
        class="mb-2 text-center font-old text-2xl"
      >Round {{ rounds.length }}</h3>

      <!-- President and Chancellor -->
      <div class="flex justify-center -mx-4 mb-8 border-b pb-4 border-gray-400">
        <div class="px-4 flex justify-start flex-col items-center max-w-sm">
          <img src="../assets/president.jpg" alt class="mb-4" />
          <span
            v-if="president"
            class="font-serif text-xl text-center bg-white py-2 px-4 rounded shadow border-2 border-red-500"
            v-text="president.userName"
          />
        </div>

        <div class="px-4 flex justify-start flex-col items-center max-w-sm">
          <img src="../assets/chancellor.jpg" alt class="mb-4" />
          <span
            v-if="chancellor && isElected"
            class="font-serif text-xl text-center bg-white py-2 px-4 rounded shadow border-2 border-yellow-400"
          >{{ chancellor.userName }}</span>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row">
        <!-- Liberal Policies -->
        <div>
          <div class="-mx-4 relative lg:px-8 mb-8 lg:mb-0 relative">
            <img src="../assets/playfield_liberal_edited.jpg" alt />
            <transition-group name="policy" class="liberal-policy-container">
              <div v-for="index in liberal" :key="index" class="liberal-policy">
                <img src="../assets/policy_liberal.jpg" alt />
              </div>
            </transition-group>

            <ElectionTracker />
          </div>
        </div>

        <!-- Facist Policies -->
        <div>
          <div class="-mx-4 relative lg:px-8">
            <img
              v-if="members.length >= 5 && members.length <= 6"
              src="@/assets/playfield_fascist_1_edited.jpg"
              alt
            />
            <img
              v-else-if="members.length >= 7 && members.length <= 8"
              src="@/assets/playfield_fascist_2_edited.jpg"
              alt
            />
            <img v-else src="@/assets/playfield_fascist_3_edited.jpg" alt />
            <transition-group name="policy" class="fascist-policy-container">
              <div v-for="index in fascist" :key="index" class="fascist-policy">
                <img src="@/assets/policy_fascist.jpg" alt />
              </div>
            </transition-group>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <ShowRole :role="roleName" />
      </div>

      <div v-if="isCreator" class="flex justify-center mt-8">
        <button class="btn px-8 border-2 border-red-600 shadow" @click="handleNextRound">Next Round</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ShowRole from '@/components/ShowRole.vue';
import ElectionTracker from '@/components/ElectionTracker.vue';
import nextRound from '@/actions/nextRound';
import Component from 'vue-class-component';
import { Policy, Round } from '@/types/game';

@Component({
  components: {
    ShowRole,
    ElectionTracker,
  },
  computed: mapGetters([
    'rounds',
    'isCreator',
    'president',
    'chancellor',
    'roleName',
    'channelName',
    'members',
    'isElected',
  ]),
})
export default class GameInfo extends Vue {
  rounds!: Round[];

  get policies(): (Policy | false)[] {
    return this.rounds.map((round: Round) => round.enactedPolicy);
  }

  get liberal(): number {
    return this.policies.filter((policy: Policy | false) => policy === Policy.Liberal).length;
  }

  get fascist(): number {
    return this.policies.filter((policy: Policy | false) => policy === Policy.Fascist).length;
  }

  // eslint-disable-next-line class-methods-use-this
  handleNextRound() {
    nextRound();
  }
}
</script>

<style lang="scss" scoped>
.fascist-policy-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 0 6%;
  display: flex;
  align-items: center;

  @screen lg {
    padding: 0 11%;
  }
}

.fascist-policy {
  width: 16.6666%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @screen md {
    padding: 0 13px;
  }

  @screen lg {
    padding: 0 6px;
  }

  img {
    @apply block;
  }
}

.liberal-policy-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 0 6%;
  display: flex;
  align-items: center;

  @screen lg {
    padding: 0 12%;
  }
}

.liberal-policy {
  width: 20%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @screen md {
    padding: 0 13px;
  }

  @screen lg {
    padding: 0 7px;
  }

  img {
    @apply block;
  }
}

.policy-enter-active {
  transition: all 0.3s ease;

  img {
    animation-name: glow;
    animation-iteration-count: 1;
    animation-duration: 0.5s;
    animation-timing-function: ease;
  }
}

.policy-enter {
  opacity: 0;
  transform: translateY(50%);
}

.policy-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@keyframes glow {
  0% {
    box-shadow: 0 0 32px rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 0 0 32px rgba(255, 255, 255, 1);
  }

  100% {
    box-shadow: 0 0 32px rgba(255, 255, 255, 0);
  }
}
</style>
