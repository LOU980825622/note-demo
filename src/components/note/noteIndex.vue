<template>
    <div class="note">
        <p v-for="(item,index) in title" :key="index">{{item}}</p>
        <ul class="note-left">
            <li v-for="(items,index) in leftIcon" :key="index">
            <!-- :style="{ backgroundImage , url(items[index].image) }"> -->
                <!-- <img :src="items[index].image" alt=""> -->
                <!-- <p>{{items[index].text}}</p> -->
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:['这是笔记应用1','这是笔记应用2','这是笔记应用3'],
            leftIcon:[
                {
                    // image:'../../../static/add.png',
                    text:1
                },
                {
                    // image:'../../../static/collection.png',
                    text:2
                },
                {
                    // image:'../../../static/add.png',
                    text:3
                }
            ]
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

            li {
                width: 30px;
                height: 30px;
                background: {
                    color: white;
                    position: center;
                    size: cover;
                }
            }
        }
    }
</style>