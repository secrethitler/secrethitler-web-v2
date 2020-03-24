import Vue, { VueConstructor } from 'vue';

import UILabel from '@/components/ui/Label.vue';
import UIInput from '@/components/ui/Input.vue';
import UIModal from '@/components/ui/Modal.vue';
import UIIcon from '@/components/ui/Icon.vue';
import UILoader from '@/components/ui/Loader.vue';
import PageTitle from '@/components/PageTitle.vue';
import http from './plugins/http';
import pusher from './plugins/pusher';

export default {
  install(_Vue: VueConstructor) {
    _Vue.component('ui-label', UILabel);
    _Vue.component('ui-input', UIInput);
    _Vue.component('modal', UIModal);
    _Vue.component('icon', UIIcon);
    _Vue.component('loader', UILoader);
    _Vue.component('page-title', PageTitle);
  },
};
