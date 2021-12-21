<template>
  <!-- 添加博客页面 -->
  <div class="_add_blog">
    <div class="_header">
      <div class="_left">标题</div>
      <div class="_right">
        <span class="_txt" @click="closeBlog()">取消</span>
        <span class="_txt btn" @click="addBlog()">提交</span>
      </div>
    </div>
    <div class="_tit">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入博客标题"
        v-model="tit"
      >
      </el-input>
    </div>
    <div class="_tit">
      <span class="_txt">正文</span>
    </div>
    <div class="_body">
      <el-input
        type="textarea"
        :rows="16"
        placeholder="请输入博客正文"
        v-model="body"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
import { insertRow, canInsertRow } from "dbchain-js-client-sm2";
let that;
export default {
  data() {
    return {
      tit: "",
      body: "",
    };
  },
  created() {
    that = this;
  },
  methods: {
    closeBlog() {
      this.$emit("closeBlog", false);
    },
  },
  computed: {
    appCode() {
      return this.$APIURL.AppCode;
    },
  },
};
</script>

<style lang="scss" scoped>
._add_blog {
  margin: 0 auto;
  ._header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 14px;
    ._left {
      font-size: 28px;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #444444;
      line-height: 42px;
    }
    ._right {
      display: flex;
      ._txt {
        font-size: 28px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #9e9e9e;
        line-height: 42px;
        cursor: pointer;
      }
      ._txt.btn {
        font-size: 28px;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: #444444;
        line-height: 42px;
        margin-left: 49px;
      }
    }
  }
  ._tit {
    text-align: left;
    ._txt {
      height: 28px;
      font-size: 28px;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #444444;
      line-height: 42px;
    }
  }
  ._tit,
  ._body {
  }
  ._tit {
    margin-bottom: 20px;
  }
  ._body {
    margin-bottom: 35px;
  }
}
</style>
