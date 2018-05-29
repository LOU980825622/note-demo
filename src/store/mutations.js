import state from "./state"

const mutations={
    add(state,data){
        let alen=state.article.length;
        let aid
        if(state.article==''){
            aid=0
        }else{
            aid=state.article[alen-1].id-0+1
        }
        state.article.push({
            id:aid,
            main:data,
            status:1
        })
        console.log(state.article)
    },
    remove(state,data){
        state.article.splice(data,1)
    },
    collection(state,data){
        let alen=state.article.length;
        let aid
        if(state.article==''){
            aid=0
        }else{
            aid=state.article[alen-1].id-0+1
        }
        state.article.push({
            id:aid,
            title:data.tit,
            main:data.main,
            status:2
        })
        state.article[data].status=2
        return
    },
    change(){
        console.log('文本域内容改变')
    }
}

export default{
    mutations,
    state
}