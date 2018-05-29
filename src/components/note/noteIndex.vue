<template>
    <div class="note">
        <ul class="note-left">
            <li v-for="(items,index) in leftIcon" :key="index"
             :title="items.text" @click="leftBtn(index)">
                <div :style="{backgroundImage:'url('+items.image+')'}"></div>
            </li>
        </ul>
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
                <li v-for="(items,index) in article" :key="index" 
                    @click="btnShowArtical(index)"
                    :class="{clrblue:index==titleChose}"
                >
                    {{ items.main }}
                </li>
            </ul>
        </div>
        <div class="note-edit">
            <div class="artical-main">
                <textarea name="" id="artical-main" cols="30" rows="10" 
                v-model="editMain" placeholder="在此处输入文章内容。。。" @input="save"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
import leftImage1 from '../../../static/images/add.png'
import leftImage2 from '../../../static/images/collection.png'
import {mapState, mapMutations,mapGetters} from 'vuex'
export default {
    data(){
        return {
            leftIcon:[
                {
                    image:leftImage1,
                    text:'添加'
                },
                {
                    image:leftImage2,
                    text:'收藏'
                },
                {
                    image:leftImage1,
                    text:'删除'
                }
            ],
            noteKinds:[
                '所有','收藏'
            ],
            editMain:'新建笔记',
            noteIndex:0,
            showNoteList:[],

            showArtical:{},
            showId:0,
            showStatus:0,
            collectionState:0,
            titleChose:-1,
        }
    },

    computed:{
        ...mapState({
            article: state=>state.article,
        }),
        ...mapGetters({
            listLen:state=>state.listLen
        })
    },

    methods:{
        // 左侧导航栏按钮
        leftBtn(n){
            var that=this;
            if(n==0){
                this.add(this.editMain);
                this.editMain='新建笔记';
                let len=this.article.length;
                that.titleChose=this.article[len-1].id;
                this.showKinds();
            }
            if(!that.editStatus){
                if(that.showNoteList.length>=1){
                    that.remove(that.showId);
                    that.titleChose=0;
                    that.showKinds();
                    this.showArticalDetail(0);
                    return;
                }
            }
        },
        ...mapMutations([
            'add','remove','collection','change'
        ]),
        // 点击保存按钮
        save(){
            this.change({
                id:this.titleChose,
                main:this.editMain
            })
            for(let i=0,len=that.article.length;i<len;i++){
                that.showNoteList.push(that.article[i])
            }
        },
        // 点击收藏按钮
        col(){
            this.collection({
                tit:this.editTitle,
                main:this.editMain
            })
            for(let i=0,len=that.article.length;i<len;i++){
                that.showNoteList.push(that.article[i])
            }
        },
        // 点击全部或收藏按钮
        centerBtn(n){
            var that=this;
            that.showStatus=n;
            that.showKinds();
            that.titleChose=0; 
            if(this.showNoteList!=''){
                this.showArticalDetail(0)
            }
        },
        // 点击中间文章列表
        btnShowArtical(n){
            var that=this;
            that.titleChose=n;
            this.showArticalDetail(n)
        },
        // 获取文章列表函数封装
        showKinds(){
            var that=this;
            that.showNoteList=[];
            if(that.showStatus==0){
                for(let i=0,len=that.article.length;i<len;i++){
                    that.showNoteList.push(that.article[i])
                }
            }else{
                for(let i=0,len=that.article.length;i<len;i++){
                    if(that.article[i].status==2){
                        that.showNoteList.push(that.article[i])
                    }
                }
            }
            console.log(that.showNoteList)
        },
        // 显示文章详情
        showArticalDetail(n){
            var that=this;
            console.log(that.showNoteList)
            if(that.showNoteList.length>1){
                var now_id=that.showNoteList[n].id;
                that.titleChose=that.showNoteList[n].id;
                
                for(let i=0,len=that.article.length;i<len;i++){
                    if(that.article[i].id==now_id){
                        that.titleChose=i;
                        that.editMain=that.article[i].main;
                        console.log('xuanzhongdeneir:'+that.article[i].main)
                        return
                    }
                }
            }
        }
    },
    mounted(){
        this.add(this.editMain);
        this.editMain='新建笔记';
    }
}
</script>
<style lang="scss" scoped>
    html,
    body {
        width: 100%;
        height: 100%;
    }

    button,
    textarea:focus,
    input:focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        outline: none;
    }

    .note {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;

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
            }
        }

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

        .note-main {
            width: 100px;
            height: 100%;
            padding: 10px 30px 30px;
            flex: 1;
            background-color: white;

            .artical-title {
                font-size: 24px;
                font-weight: bold;
                line-height: 100px;
                text-align: center;
            }
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
    }
</style>