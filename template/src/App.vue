<template>
  <div id="app">
    {{#router}}
    <router-view />
    {{else}}
    <HelloWorld />
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld.vue';

{{/unless}}
export default {
  name: 'App'{{#unless router}},
  components: {
    HelloWorld
  }{{/unless}}
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
