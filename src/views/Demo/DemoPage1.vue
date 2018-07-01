<template>
  <div class="home">
    <img src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{count}}</div>
    <button @click="increment">+1</button>
    <button @click="incrementStep(2)">+2</button>
    <button @click="incrementAsync">async+1</button>
    <button @click="incrementStepAsync(2)">async+2</button>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    this.queryListAsync();
  },
  computed: {
    ...mapState('demo/demoPage1', {
      count: state => state.count,
      list: state => state.list,
    }),
  },
  methods: {
    ...mapMutations('demo/demoPage1', {
      increment: 'increment',
      incrementStep(commit, step) {
        commit('incrementStep', {
          step,
        });
      },
    }),
    ...mapActions('demo/demoPage1', {
      incrementAsync: 'incrementAsync',
      incrementStepAsync(commit, step) {
        commit('incrementStepAsync', {
          step,
        });
      },
      queryListAsync: 'queryListAsync',
    }),
  },
};
</script>
