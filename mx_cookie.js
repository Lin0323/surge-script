// 自动抓 Cookie 并保存

if ($request && $request.headers) {
  const cookie = $request.headers["Cookie"];
  if (cookie) {
    $persistentStore.write(cookie, "mx_cookie");
    console.log("魔仙 Cookie 已保存");
    $notification.post("✅ Cookie 抓取成功", "已保存 mx_cookie", "");
  } else {
    $notification.post("❌ Cookie 抓取失败", "未找到 Cookie", "");
  }
}
$done({});
