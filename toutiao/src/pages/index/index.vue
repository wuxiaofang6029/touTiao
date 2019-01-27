<template>
  <div class="counter-warp">
    <i-button>按钮</i-button>
    <i-button v-on:click="handleClick">默认按钮</i-button>
    <i-button v-on:click="handleClick" type="error" long="true">联通两边按钮</i-button>
    <i-button v-on:click="handleClick" type="primary">Primary</i-button>
    <i-button v-on:click="handleClick" type="ghost">Ghost</i-button>
    <i-button v-on:click="handleClick" type="info">Info</i-button>
    <i-button v-on:click="handleClick" type="success">Success</i-button>
    <i-button v-on:click="handleClick" type="warning">Warning</i-button>
    <i-button v-on:click="handleClick" type="error">Error</i-button>

    <a :href="AppUrls.COUNTER" class="home">去往vuex</a>
    <a :href="AppUrls.PACKAGE_A" class="home">分包A</a>
    <a href="/pages/testExtend/main" class="home">测试继承</a>

    <i-panel title="基础用法">
      <i-input  title="收货人" autofocus placeholder="名字" />
      <i-input type="number" title="联系电话" placeholder="请输入手机号" />
      <i-input  type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
      <i-input  title="用户信息" disabled />
    </i-panel>

    <i-panel title="无标题输入框">
      <i-input  placeholder="请输入收货人姓名" />
    </i-panel>

    <i-panel title="圆角输入框">
      <i-input type="number" right title="消费总额" mode="wrapped" placeholder="询问收银员后输入" />
      <i-input type="number" right error title="不参与优惠金额" mode="wrapped" placeholder="询问收银员后输入" />
    </i-panel>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>


<style lang="less">
  @import "./index";

  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

</style>
