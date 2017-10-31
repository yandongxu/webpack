import Vue from 'vue';
import Hello from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor({
      propsData: {
        count: 10
      }
    }).$mount();

    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');

    expect(vm.$el.querySelector('.hello h2').textContent)
      .to.equal('10');

    vm.$destroy();
  });
});
