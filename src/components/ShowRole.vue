<template>
  <div>
    <button
      @mousedown="show"
      @touchstart="show"
      @mouseup="hide"
      @touchend="hide"
      class="text-center font-serif py-2 px-3 bg-white rounded shadow border border-red-500"
    >Hold to show role</button>

    <modal name="role" ref="modal">
      <div class="flex justify-center mb-4">
        <img v-if="role == 'fascist'" src="../assets/role_fascist.jpg" alt="Fascist" />
        <img v-if="role == 'liberal'" src="../assets/role_liberal.jpg" alt="Liberal" />
        <img v-if="role == 'secret hitler'" src="../assets/role_hitler.jpg" alt="Hitler" />
      </div>
      <div v-if="partyMembers.length > 0 && role != 'liberal'">
        <div v-for="member in partyMembers" :key="member.userId">
          <span>{{ member.userName }}: {{ member.roleName }}</span>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['role'],

  computed: {
    ...mapGetters(['partyMembers']),
  },

  methods: {
    show() {
      this.$refs.modal.show();
    },

    hide() {
      this.$refs.modal.close();
    },
  },
};
</script>

<style>
</style>
