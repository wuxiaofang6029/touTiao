<template>
  <div class="counter-warp">
    <!-- tab切换 -->
    <div class="top">
      <i-icon type="search" size="22" color="#80848f" />
      <i-tabs :current="current" scroll class='tab_nav'>
        <i-tab v-for='(itm,idx) in channels' :key='idx' :title="itm.name"></i-tab>
      </i-tabs>
      <div class="top_right">
        <i-icon type="add" size="22" color="#80848f" />
        <i-icon type="addressbook" size="22" color="#80848f" />
      </div>
    </div>
    <div class="content">
      <div class="c_block" v-for='(itm,idx) in listData' :key='idx'>
        <div>{{itm.title}}</div>
        <div>{{itm.media_name}}   {{itm.share_count}}</div>
      </div>

    </div>

    <!-- 切换内容 -->
    <i-button @click='goDetail'>去详情页 </i-button>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>


<style lang="less">
    @import "./index";
    .counter-warp {
        width: 100%;
        height: 100%;
    }
    
    .top {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;
        box-sizing: border-box;
    }
    
    .top_right {
        width: 80px;
        border-left: 1px solid #eee;
    }
    
    .top ._i-icon {
        flex-basis: 0;
        flex-shrink: 1;
        margin: 0 4px;
    }
    
    .tab_nav {
        flex: 1;
        line-height: 50px;
        white-space: nowrap;
        overflow-x: scroll;
    }
    
    .tab_nav {
        font-size: 16px;
        margin: 0 8px 0 4px;
        display: inline-block;
    }
</style>