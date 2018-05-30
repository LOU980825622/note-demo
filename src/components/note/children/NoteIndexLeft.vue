<template>
    <div>
        <ul class="note-left">
            <li @click="createNew" title="新增">
                <div></div>
            </li>
            <li @click="joinCollection" title="收藏">
                <div :class="{collected:collected}"></div>
            </li>
            <li @click="removeNote" title="删除">
                <div></div>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState({
            article: state=>state.article,
            showNoteList:state=>state.showNoteList,
            collected:state=>state.collected,
            titleChose:state=>state.titleChose,
            showStatus:state=>state.showStatus
        })
    },
    methods:{
        // 新建笔记
        createNew(){
            this.add(this);
            this.createnew()
        },
        // 收藏笔记
        joinCollection(){
            if(this.showNoteList!=''){
                this.collection({
                    id:this.titleChose,
                })
            }
            if(this.showStatus==1){
                this.listRechange()
            }
        },
        // 删除笔记
        removeNote(){
            this.remove(this.titleChose);
            if(this.article.length<=0){
                this.createNew()
            }
            this.listRechange()
        },
        ...mapMutations([
            'add','remove','collection','createnew','listRechange'
        ]),
    },
}
</script>
<style  lang="scss" scoped>
    .note-left {
        width: 80px;
        height: 100%;
        background-color: #25323c;
        padding-top: 30px;
        box-sizing: border-box;

        li {
            width: 30px;
            height: 30px;
            margin: 0 auto 30px;

            div {
                height: 30px;
                background: {
                    position: center;
                    size: cover;
                }
            }

            &:last-child {
                transform: rotate(45deg);
            }

            &:first-child div {
                background-image: url(../../../statics/add.png);
            }

            &:nth-child(2) {
                div {
                    background-image: url(../../../statics/collection.png);
                }

                .collected {
                    background-image: url(../../../statics/collectioned.png);
                }
            }

            &:last-child div {
                background-image: url(../../../statics/add.png);
            }
        }
    }
</style>
