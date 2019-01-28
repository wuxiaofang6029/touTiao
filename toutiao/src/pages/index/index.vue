<template>
  <div class="counter-warp">
    <!-- tab切换 -->
    <div class="top">
      <i-icon type="search" size="22" color="#80848f" />
      <i-tabs :current="current" scroll class='tab_nav' @change='handleChangeScroll' color='#D33D3E'>
        <i-tab v-for='(itm,idx) in channels' :key='idx' :title="itm.name"></i-tab>
      </i-tabs>
      <div class="top_right">
        <i-icon type="add" size="22" color="#80848f" />
        <i-icon type="addressbook" size="22" color="#80848f" />
      </div>
    </div>
     <!-- 切换内容 -->
    <div class="content">
      <div class="c_main" @click='goDetail' v-for='(itm,idx) in listData' :key='idx'>
          <div class="c_block" >
              <div class='c_title'>{{itm.title}}</div>
              <div class="gallery">
                  <img :src="value.url" mode="widthFix" v-for="(value, key) in itm.image_list" :key="key">
                </div>
              <div class='c_info'>
                <span>{{itm.media_name}}</span>
                <span>{{itm.share_count}}评论</span>
              </div>
            </div>
            <img class="middle-image"  :src="itm.middle_image.url" v-if="!itm.image_list && itm.middle_image">
      </div>
    </div>
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
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    
    .top {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
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
    
    .content {
        flex: 1;
        overflow-y: scroll;
    }
    
    .c_main {
        display: flex;
        padding: 10px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
    }
    
    .c_block {
        width: 100%;
    }
    
    .c_title {
        width: 100%;
        font-size: 16px;
        line-height: 1.5;
    }
    
    .c_info {
        width: 100%;
        line-height: 2.5;
        color: #666;
        font-size: 12px;
        margin-top: 6px;
    }
    
    .c_info span {
        margin-right: 10px;
    }
    
    .gallery {
        width: 100%;
        margin: 10rpx 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10rpx 0;
        box-sizing: border-box;
        overflow: hidden;
    }
    
    .gallery img {
        flex: 1;
    }
    
    .gallery img:nth-child(2) {
        margin: 0 10rpx;
    }
    
    .c_main>.middle-image {
        width: 45%;
        height: 100px;
        padding-left: 10rpx;
        margin-top: 10px;
    }
</style>