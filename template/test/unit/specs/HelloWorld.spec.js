import Vue from 'vue';
import store from '@/store';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    // Clean component
    // const Constructor = Vue.extend(HelloWorld);
    // const vm = new Constructor({
    //   propsData: {
    //     count: 10
    //   }
    // }).$mount();

    // Vuex deps
    const vm = new Vue({
      store,
      render: h => h(HelloWorld)
    }).$mount();

    expect(vm.$el.querySelector('h1').textContent)
      {{#if_eq runner "karma"}}.to.equal{{/if_eq}}{{#if_eq runner "jest"}}.toEqual{{/if_eq}}('Welcome to Your Vue.js App');

    expect(vm.$el.querySelector('h2').textContent)
      {{#if_eq runner "karma"}}.to.equal{{/if_eq}}{{#if_eq runner "jest"}}.toEqual{{/if_eq}}('0');

    vm.$destroy();
  });
});
