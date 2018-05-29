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
        return
    },
    remove(state,data){
        for(let i=0,len=state.article.length;i<len;i++){
            if(state.article[i].id==data){
                state.article.splice(i,1)
                return
            }
        }
    },
    collection(state,data){
        for(let i=0,len=state.article.length;i<len;i++){
            if(state.article[i].id==data.id){
                if(state.article[i].status==1){
                    state.article[i].status=2;
                    return
                }
                state.article[i].status=1
            }
        }
    },
    change(state,data){
        for(let i=0,len=state.article.length;i<len;i++){
            if(state.article[i].id==data.id){
                state.article[i].main=data.main;
                return;
            }
        }
    },
    createnew(){
        state.editMain='新建笔记';
        let alen=state.article.length;
        let aid
        if(state.article==''){
            aid=0
        }else{
            aid=state.article[alen-1].id-0+1
        }
        state.article.push({
            id:aid,
            main:state.editMain,
            status:1
        })
        state.showNoteList=[]
        for(let i=0,len=state.article.length;i<len;i++){
            state.showNoteList.push(state.article[i])
        }
        let len=state.showNoteList.length;
        state.titleChose=state.showNoteList[len-1].id;
        state.indexChose=len-1;
        state.collected=false;
    }
}

export default{
    mutations,
    state
}