import state from "./state"

const mutations={
    add(state,data){
        let alen=state.artical.length;
        let aid
        if(state.artical==''){
            aid=0
        }else{
            aid=state.artical[alen-1].id-0+1
        }   
        
        state.artical.push({
            id:aid,
            title:data.tit,
            main:data.main,
            status:1
        })
        return
    },
    remove(state,data){
        state.artical.splice(data,1)
    },
    collection(state,data){
        let alen=state.artical.length;
        let aid
        if(state.artical==''){
            aid=0
        }else{
            aid=state.artical[alen-1].id-0+1
        }
        state.artical.push({
            id:aid,
            title:data.tit,
            main:data.main,
            status:2
        })
        return
    }
}

export default{
    mutations,state
}