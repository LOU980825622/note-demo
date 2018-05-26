<template>
  <div class="hello">
    <img class="logo" src="~@/assets/images/common/hfs.png" alt="logo" @click="clickLogo">
    <h1>{{ msg }}</h1>
    <h2>links</h2>
    <ul>
      <li><a href="https://hfs.yunxiao.com" target="_blank">好分数主站</a></li>
      <li><a href="http://wiki.iyunxiao.com/pages/viewpage.action?pageId=29393335" target="_blank">脚手架wiki</a></li>
    </ul>
  </div>
</template>

<script>

export default {
    name: 'Hello',
    data() {
        return {
            msg: 'Welcome to HFS vue scaffold',
            codeLintLinks: {
                title: '编码规范',
                links: [
                    {
                        url: 'https://standardjs.com/rules.html',
                        caption: 'standard'
                    },
                    {
                        url: 'https://github.com/vuejs/eslint-plugin-vue',
                        caption: 'eslint-vue-plugin'
                    },
                    {
                        url: 'https://stylelint.io/user-guide/rules/',
                        caption: 'stylelint'
                    }
                ]
            }
        };
    },
    methods: {
        clickLogo() {
            alert('welcome!');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
    background-color: #fff;
}

.hello {
    text-align: center;
    margin-top: 50px;
}

h1,
h2 {
    font-weight: normal;
}

h1 {
    font-size: 2em;
    margin: 21px 0;
}

h2 {
    font-size: 1.5em;
    margin: 20px 0;
}

.logo {
    width: 200px;
    height: 200px;
    margin: 0 auto;
}

ul {
    list-style-type: none;
    padding: 0;
    line-height: 1.5;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
