<template>
    <div class="note">
        <v-left></v-left>
        <v-center></v-center>
        <v-right></v-right>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import left from './children/NoteIndexLeft'
import right from './children/NoteIndexRight'
import center from './children/NoteIndexCenter'
export default {
    components:{
        'v-left':left,
        'v-center':center,
        'v-right':right
    },
    computed:{
        ...mapState({
            article: state=>state.article,
            editMain:state=>state.editMain
        }),
    },
    methods:{
        ...mapMutations([
            'add','remove','collection','change','createnew','judgeCollection','listRechange'
        ]),
    },
    mounted(){
        if(this.article.length==0){
            this.add(this.editMain);
            this.listRechange()
            // this.showNoteList.push(this.article[0])
            this.titleChose=0;
            this.indexChose=0;
        }else{
            // for(let i=0,len=this.article.length;i<len;i++){
            //     this.showNoteList.push(this.article[i])
            // }
            // this.titleChose=this.showNoteList[0].id;    
            // this.indexChose=0;
            // this.editMain=this.showNoteList[0].main
        }
    }
}
</script>
<style lang="scss" scoped>
    html,
    body {
        width: 100%;
        height: 100%;
    }

    .note {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
    }
</style>