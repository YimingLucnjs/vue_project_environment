import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
Vue.use(Vuex)
const store = new Vuex.Store({
  modules,
  getters: {
    windowResized(state){
        return state.system.windowResized
    }
  }
});

export default store