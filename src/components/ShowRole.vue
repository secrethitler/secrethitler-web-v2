<template>
  <div>
    <button
      @mousedown="show"
      @touchstart="show"
      @mouseup="hide"
      @touchend="hide"
      class="show-button text-center font-serif py-2 px-3 bg-white rounded shadow border border-red-500"
    >Hold to show role</button>

    <modal name="role" ref="modal">
      <div class="flex justify-center">
        <img v-if="roleName === Role.Fascist" src="../assets/role_fascist.jpg" alt="Fascist" />
        <img v-if="roleName === Role.Liberal" src="../assets/role_liberal.jpg" alt="Liberal" />
        <img v-if="roleName === Role.Hitler" src="../assets/role_hitler.jpg" alt="Hitler" />
      </div>
      <div v-if="roleName !== Role.Liberal && partyMembers.length > 0" class="mt-4">
        <div v-for="member in partyMembers" :key="member.userId">
          <span class="text-xl font-bold">
            {{ member.userName }}:
            <span
              v-if="member.roleName === Role.Hitler"
              class="font-old font-bold text-xl"
            >Hitler</span>
            <span v-if="member.roleName === Role.Fascist" class="font-old font-bold text-xl">Fascist</span>
          </span>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';
import { Role } from '../types/game';

@Component({
  computed: mapGetters(['roleName', 'partyMembers']),
})
export default class ShowRole extends Vue {
  Role = Role;

  show() {
    (this.$refs.modal as any).show();
  }

  hide() {
    (this.$refs.modal as any).close();
  }
}
</script>

<style lang="scss">
.show-button {
  user-select: none;
}
</style>
