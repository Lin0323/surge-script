let email = "linzhihua0323@qq.com";
let password = "zhihua080729";

let login_url = "https://mxwljsq.com/auth/login";
let checkin_url = "https://mxwljsq.com/user/checkin";

let loginRequest = {
  url: login_url,
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: `email=${email}&passwd=${password}&code=`
};

$httpClient.post(loginRequest, function (error, response, data) {
  if (error) {
    $done({
      title: "登录失败",
      content: error,
      icon: "xmark.octagon",
      "icon-color": "#FF6666"
    });
    return;
  }

  let cookie = response.headers["Set-Cookie"];
  let checkinRequest = {
    url: checkin_url,
    method: "POST",
    headers: {
      "Cookie": cookie,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  $httpClient.post(checkinRequest, function (error, response, data) {
    if (error) {
      $done({
        title: "签到失败",
        content: error,
        icon: "xmark.circle",
        "icon-color": "#FF6666"
      });
    } else {
      let msg = JSON.parse(data).msg;
      $done({
        title: "签到成功",
        content: msg,
        icon: "checkmark.seal",
        "icon-color": "#00DD00"
      });
    }
  });
});
