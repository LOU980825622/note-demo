<template>
    <div class="note">
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
<<<<<<< HEAD
                <li v-for="(items,index) in article" :key="index" 
=======
                <li v-for="(items,index) in showNoteList" :key="index" 
>>>>>>> dev
                    @click="btnShowArtical(index)"
                    :class="{clrblue:index==indexChose}"
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
import {mapState, mapMutations,mapGetters} from 'vuex'
export default {
    data(){
        return {
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
            collected:false,
            indexChose:0
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
        // 新建笔记
        createNew(){
            this.editMain='新建笔记';
            this.add(this.editMain);
            this.showNoteList=[]
            for(let i=0,len=this.article.length;i<len;i++){
                this.showNoteList.push(this.article[i])
            }
            let len=this.showNoteList.length;
            this.titleChose=this.showNoteList[len-1].id;
            this.indexChose=len-1;
            this.collected=false
        },
        // 收藏笔记
        joinCollection(){
            if(this.showNoteList!=''){
                this.collection({
                    id:this.titleChose,
                    collectNew:true
                })
                this.collected=!this.collected
            }
        },
        // 删除笔记
        removeNote(){
            console.log(this.titleChose)
            // if(this.titleChose>=0){
                this.remove(this.titleChose);
            // }
            if(this.article.length<=0){
                this.createNew()
            }
            this.listRechange()
        },
        ...mapMutations([
            'add','remove','collection','change'
        ]),
        // 保存笔记
        save(){
            if(this.showNoteList!=''){
                this.change({
                    id:this.titleChose,
                    main:this.editMain
                })
            }
        },
        // 点击全部或收藏按钮
        centerBtn(n){
            this.showStatus=n;
            this.listRechange()
        },
        // 点击中间文章列表
        btnShowArtical(n){
            this.titleChose=this.showNoteList[n].id;
            this.indexChose=n
            this.editMain=this.showNoteList[n].main;
            if(this.showNoteList[n].status==1){
                this.collected=false
            }else{
                this.collected=true
            }
        },
        // 获取笔记目录
        listRechange(){
            this.showNoteList=[];
            if(this.showStatus==0){
                for(let i=0,len=this.article.length;i<len;i++){
                    this.showNoteList.push(this.article[i])
                }
                this.indexChose=0;
                this.titleChose=this.showNoteList[0].id;
                this.editMain=this.showNoteList[0].main;
                if(this.showNoteList[0].status==1){
                    this.collected=false
                }else{
                    this.collected=true
                }
                return
            }
            this.collected=true
            for(let i=0,len=this.article.length;i<len;i++){
                if(this.article[i].status==2){
                    this.showNoteList.push(this.article[i])
                }
            }
            this.indexChose=0;
            if(this.showNoteList==''){
                this.editMain='无收藏的笔记';
                return   
            }
            this.titleChose=this.showNoteList[0].id;
            this.editMain=this.showNoteList[0].main;
        }
    },
    mounted(){
        if(this.article.length==0){
            this.add(this.editMain);
            this.showNoteList.push(this.article[0])
            this.titleChose=this.showNoteList[0].id;
            this.indexChose=0;
        }else{
            for(let i=0,len=this.article.length;i<len;i++){
                this.showNoteList.push(this.article[i])
            }
            this.titleChose=this.showNoteList[0].id;    
            this.indexChose=0;
            this.editMain=this.showNoteList[0].main
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

                &:first-child div {
                    background-image: url(../../statics/add.png);
                }

                &:nth-child(2) {
                    div {
                        background-image: url(../../statics/collection.png);
                    }

                    .collected {
                        background-image: url(../../statics/collectioned.png);
                    }
                }

                &:last-child div {
                    background-image: url(../../statics/add.png);
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