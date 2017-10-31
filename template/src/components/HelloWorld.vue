<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>\{{ count }}</h2>
    {{#vuex}}
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    {{/vuex}}
  </div>
</template>

<script>
{{#vuex}}
import { mapGetters, mapActions } from 'vuex';

{{/vuex}}
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }{{#vuex}},
  computed: {
    ...mapGetters({
      count: 'count'
    })
  },
  methods: {
    ...mapActions({
      increment: 'increment',
      decrement: 'decrement'
    })
  }{{else}},
  props: {
    count: {
      type: Number,
      default: 0
    }
  }{{/vuex}}
};
</script>
