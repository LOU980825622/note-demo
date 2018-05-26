<template>
    <div class="note">
        <ul class="note-left">
            <li v-for="(items,index) in leftIcon" :key="index"
             :title="items.text" @click="leftBtn(index)">
                <div :style="{backgroundImage:'url('+items.image+')'}"></div>
            </li>
        </ul>
    </div>
</template>
<script>
import leftImage1 from '../../../static/images/add.png'
import leftImage2 from '../../../static/images/collection.png'
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
            ]
        }
    },
    methods:{
        leftBtn(n){
            console.log(n)
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
    }
</style>