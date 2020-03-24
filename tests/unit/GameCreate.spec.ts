import { mount, createLocalVue } from '@vue/test-utils';
import plugin from '@/plugin';
import GameCreate from '@/views/GameCreate.vue';
import App from '@/App.vue';
import create from '@/api/game/create';
import store from '@/store';

jest.mock('@/api/game/create', () => jest.fn(async (userName: string) => Promise.resolve({
  data: {
    userName,
    channelName: '123456',
    userId: 1234,
  },
})));

const localVue = createLocalVue();
localVue.use(plugin);

describe('GameCreate.vue', () => {
  it('it creates a new game', async () => {
    const wrapper = mount(GameCreate, { localVue, store });

    const form = wrapper.find('form');
    const userNameInput = wrapper.find('input[name="userName"]');
    userNameInput.setValue('username');

    form.trigger('submit');

    expect(create).toBeCalledWith('username');
  });
});
