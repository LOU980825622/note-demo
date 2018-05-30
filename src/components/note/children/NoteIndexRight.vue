<template>
    <div class="note-edit">
        <div class="artical-main">
            <textarea name="" id="artical-main" cols="30" rows="10" :value="editMain"
            placeholder="在此处输入文章内容。。。" @input="save"></textarea>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState({
            editMain: state=>state.editMain,
            titleChose: state=>state.titleChose,
            showNoteList: state => state.showNoteList
        }),
    },
    methods:{
        // 保存笔记
        save(e){
            if(this.showNoteList!=''){
                this.change({
                    id:this.titleChose,
                    main:e.target.value
                })
            }
        },
        ...mapMutations([
            'change'
        ])
    }
}
</script>
<style lang="scss" scoped>
    textarea:focus,
    input:focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        outline: none;
    }

    .note-edit {
        width: 100px;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        flex: 1;

        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;

            input {
                width: 100px;
                flex: 1;
                padding-left: 20px;
                border: none;
                font-size: 18px;
                align-items: center;
            }

            textarea {
                width: 100px;
                height: 100%;
                flex: 1;
                resize: none;
                border: none;
                padding: 0 10px;
                box-sizing: border-box;
                font-size: 16px;
            }

            button {
                display: block;
                width: 100px;
                height: 40px;
                background-color: #3090e8;
                color: white;
                border-radius: 5px;
                border: none;
                font-size: 16px;
            }
        }

        .artical-title {
            margin-bottom: 50px;
            align-items: center;
        }

        .artical-main {
            height: 10px;
            flex: 1;
        }
    }
</style>
