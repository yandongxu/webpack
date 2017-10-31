import Vue from 'vue';
import store from '@/store';
import Hello from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    // Clean component
    // const Constructor = Vue.extend(Hello);
    // const vm = new Constructor({
    //   propsData: {
    //     count: 10
    //   }
    // }).$mount();

    // Vuex deps
    const vm = new Vue({
      store,
      render: h => h(Hello)
    }).$mount();

    expect(vm.$el.querySelector('h1').textContent)
    .to.equal('Welcome to Your Vue.js App');

    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('0');

    vm.$destroy();
  });
});
