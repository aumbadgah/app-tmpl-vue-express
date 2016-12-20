
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

    .app-component {
        height: 100%;
        
        .red {
            color: #f00;
        }
    }
</style>

<template>
    <div class="app-component">
        <msg-header v-bind:message="msg"></msg-header>
    </div>
</template>

<script>
    import api from './../modules/api'

    import MessageHeader from './messageHeader.vue'

    export default {
        data () {
            return {
                msg: 'Hello world!'
            }
        },
        created: function () {
            api.getMsg()
            .then(msg => this.msg = msg);
        },
        components: {
            'msg-header': MessageHeader
        }
        
    }
</script>
