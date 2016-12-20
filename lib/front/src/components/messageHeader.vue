
<style lang="less">
    .message-header {
        font-family: Arial, sans-serif;
    }
</style>

<template>
    <h1 class="message-header red">{{message}}</h1>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        props: [
            'message'
        ]
    }
</script>
