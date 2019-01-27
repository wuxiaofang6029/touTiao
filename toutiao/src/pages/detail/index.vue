<template>
  <div>我是detail
    
  </div>
</template>

<script lang='ts'>
    import {
        Vue,
        Component
    } from 'vue-property-decorator'

    // 必须使用装饰器的方式来指定component
    @Component({})
    class Detail extends Vue {
        ver: number = 123;

        mounted() { // vue hook
        }
    }

    export default Detail;
</script>

<style lang='less' scoped></style>