
<style lang="less">
    *,
    html,
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        display: block;
        width: 100%;
        height: 100%;
    }

    #app {
        height: 100%;
        
        .red {
            color: #f00;
        }
    }
</style>

<template>
    <div id="app">
        <h1 class="red">{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello woooorld!'
            }
        }
    }
</script>
