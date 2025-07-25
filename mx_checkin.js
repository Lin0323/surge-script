// 魔仙机场签到脚本

let url = "https://mxwljsq.com/user/checkin"; // 签到地址
let headers = {
  "Cookie": $persistentStore.read("mx_cookie"),
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)"
};

let request = {
  url: url,
  headers: headers
};

$httpClient.post(request, function (err, response, data) {
  if (err) {
    $notification.post("魔仙签到失败", "请求错误", err);
    $done();
  } else {
    try {
      let json = JSON.parse(data);
      let msg = json.msg || "未知结果";
      $notification.post("魔仙签到成功", "", msg);
    } catch (e) {
      $notification.post("魔仙签到异常", "返回数据异常", data);
    }
    $done();
  }
});
