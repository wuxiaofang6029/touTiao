<template>
  <div class="counter-warp">
    <ul class='tab_nav'>
      <li v-for='(itm,idx) in channels' :key='idx'>{{itm.name}}</li>
    </ul>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>


<style lang="less">
    @import "./index";
    .counter-warp {
        width: 100%;
        height: 100%;
    }
    
    .tab_nav {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        box-sizing: Border-box;
        white-space: nowrap;
        overflow-x: scroll;
    }
    
    .tab_nav li {
        margin-right: 10px;
        font-size: 16px;
        display: inline-block;
    }
</style>