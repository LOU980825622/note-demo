const actions={
    add:({commit},data) => {
        commit('add',data)
        console.log(data)
    },
    collection:({commit},data) => {
        commit('collection',data)
    },
    remove:({commit},data) =>{
            commit('remove',data)
        
    }
}

export default actions
