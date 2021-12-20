import { createAccessToken } from "dbchain-js-client-sm2/src/access_token";
import { restGet } from 'dbchain-js-client-sm2'
import { APIURL } from "@/api/_init_.js";
// 获取一个积分
async function getVerToken() {
  let accessToken = createAccessToken()
  return await restGet('/dbchain/oracle/new_app_user/' + accessToken)
}

// 常用dbchain-js-client方法
/**
     * row 要插入的数据
     * tableName
     * text 成功后的message
     */
 let exInsertRow=async (row, tableName, text,appCode=APIURL.AppCode)=> {
  that.$store.commit("setIsLoding", true);
//   尝试插入 如果成功则说明可正确插入数据
  let isCanInsert = await canInsertRow(
    appCode,
    tableName,
    row
  );
  if (!isCanInsert) {
    that.$store.commit("setIsLoding", false);
    return that.$message.error("暂时不能插入，请检查原因");
  }
  // 能进回调的都是成功提交了。
  insertRow(appCode, tableName, row, async () => {
        that.$store.commit("setIsLoding", false);
        that.$message.success(text);
        this.$emit('getBlogs',false)
  });
};


// await Querier(this.appCode).table("user").equal("dbchain_key", element.created_by).val();

export {
  getVerToken
}