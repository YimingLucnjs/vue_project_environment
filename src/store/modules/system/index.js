export default {
    namespaced: true,
    state: {
        windowResized: document.body.clientWidth || document.documentElement.clientWidth,
    },
    mutations: {
        windowSizeChange(state, value){
            state.windowResized = value
        }
    },
    actions: {
        windowSizeChange({commit}, value){
            commit('windowSizeChange', value)
        }
    }
}