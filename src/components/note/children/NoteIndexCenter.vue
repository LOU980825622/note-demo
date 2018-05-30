<template>
    <div>
        <div class="note-center">
            <p>笔记</p>
            <ul class="note-center-btn">
                <li v-for="(items,index) in noteKinds" :key="index" 
                    @click="centerBtn(index)"
                >
                    {{ items }}
                </li>
            </ul>
            <ul class="note-center-list">
                <li v-for="(items,index) in showNoteList" :key="index" 
                    @click="btnShowArtical(index)"
                    :class="{clrblue:index==indexChose}"
                >
                    {{ items.main }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data(){
        return {
            noteKinds:[
                '所有','收藏'
            ],
            
            
        }
    },
    computed:{
        ...mapState({
            showNoteList:state=>state.showNoteList,
            indexChose:state=>state.indexChose,
        }),
    },
    methods:{
        // 点击全部或收藏按钮
        centerBtn(n){
            this.showStatusFn(n);
            this.listRechange()
        },
        // 点击中间文章列表
        btnShowArtical(n){
            this.centerNoteBtn(n);
        },
        ...mapMutations([
            'listRechange','centerNoteBtn','showStatusFn'
        ]),
    }
}
</script>

<style lang="scss" scoped>
    .note-center {
        width: 300px;
        height: 100%;
        text-align: center;
        padding-top: 4px;
        background-color: #f2f2f2;
        overflow: scroll;

        .clrblue {
            color: blue;
        }

        p {
            line-height: 60px;
            font-size: 20px;
        }

        .note-center-btn {
            width: 250px;
            height: 34px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;

            li {
                width: 20px;
                height: 32px;
                line-height: 32px;
                flex: 1 1 auto;
                border: {
                    width: 1px;
                    style: solid;
                }

                &:first-child {
                    background-color: #e0e0e0;
                    border-color: #a9a9a9;
                }

                &:last-child {
                    background-color: white;
                    border-color: #cdcdcd;
                }
            }
        }

        .note-center-list {
            width: 280px;
            margin: 30px auto;

            li {
                text-align: left;
                line-height: 1.2;
                margin-bottom: 10px;
                cursor: pointer;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;

                &:hover {
                    text-decoration: underline;
                    color: blue;
                }
            }
        }
    }
</style>
