<template>
  <transition name="modal">
    <div v-if="open" class="modal" :class="{ 'modal-open': open }">
      <div ref="modal" class="modal-inner relative inline-flex justify-center items-center">
        <button @click="close" class="absolute top-0 right-0 p-3">
          <icon icon="times" class="opacity-75" />
        </button>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import { mutations } from '@/store/modal';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters(['activeModal']),
    open() {
      return this.name === this.activeModal;
    },
  },

  methods: {
    show() {
      this.$store.commit(mutations.SET_ACTIVE_MODAL, this.name);
      window.addEventListener('click', this.handleClick);
    },
    close() {
      this.$store.commit(mutations.SET_ACTIVE_MODAL, null);
      window.removeEventListener('click', this.handleClick);
    },
    handleClick(e) {
      let el = e.target;

      while (el) {
        if (e.target === this.$refs.modal) {
          return;
        }

        el = el.parentNode;
      }

      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed inset-0 h-full w-full flex items-center justify-center p-4 z-50 pointer-events-none;
  background-color: rgba(0, 0, 0, 0.5);

  &.modal-open {
    @apply pointer-events-auto;

    .modal-inner {
      transform: translateY(0);
    }
  }

  .modal-inner {
    transition: all 0.3s ease;
    transform: translateY(-5rem);
    @apply inline-flex rounded-lg p-8 shadow-lg bg-white;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave {
  opacity: 1;
}
</style>
