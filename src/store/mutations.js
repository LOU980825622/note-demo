import state from "./state"

const mutations={
    add(state){
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
        console.log(state.article)
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
        state.collected=!state.collected;
        for(let i=0,len=state.article.length;i<len;i++){
            if(state.article[i].id==data.id){
                if(state.article[i].status==1){
                    state.article[i].status=2;
                }else{
                    state.article[i].status=1
                }
                return
            }
        }
    },
    change(state,data){
        for(let i=0,len=state.article.length;i<len;i++){
            if(state.article[i].id==data.id){
                state.article[i].main=data.main;
                state.editMain=data.main;
            }
        }
    },
    createnew(){
        state.showNoteList=[]
        for(let i=0,len=state.article.length;i<len;i++){
            state.showNoteList.push(state.article[i])
        }
        let len=state.showNoteList.length;
        state.titleChose=state.showNoteList[len-1].id;
        state.indexChose=len-1;
        state.collected=false
    },
    judgeCollection(){
        if(this.showNoteList!=''){
            this.collection({
                id:this.titleChose,
                collectNew:true
            })
            this.collected=!this.collected
        }
    },
    // 获取笔记目录
    listRechange(){
        state.showNoteList=[];
        if(state.showStatus==0){
            state.showNoteList=state.article.filter(items=>items.status)
            state.indexChose=0;
            state.titleChose=state.showNoteList[0].id;
            state.editMain=state.showNoteList[0].main;
            if(state.showNoteList[0].status==1){
                state.collected=false
            }else{
                state.collected=state
            }
            return
        }
        state.collected=true
        state.showNoteList=state.article.filter(items=>items.status==2)
        state.indexChose=0;
        if(state.showNoteList==''){
            state.editMain='无收藏的笔记';
            return   
        }
        state.titleChose=state.showNoteList[0].id;
        state.editMain=state.showNoteList[0].main;
    },
    centerNoteBtn(state,n){
        state.titleChose=state.showNoteList[n].id;
        state.indexChose=n
        state.editMain=state.showNoteList[n].main;
        if(state.showNoteList[n].status==1){
            state.collected=false
        }else{
            state.collected=true
        }
    },
    showStatusFn(state,n){
        state.showStatus=n;
    }
}

export default{
    mutations,
    state
}