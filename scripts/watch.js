const puppeteer = require("puppeteer");

(async () => {
  const cookies = JSON.parse(process.env.BILI_COOKIES || "[]");
  const url = "https://www.bilibili.com/video/BV1sK41127iZ"; // 替换成你想看的 BV

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setCookie(...cookies);

  await page.goto(url, { waitUntil: "networkidle2" });

  // 检查是否已登录（未登录会显示“登录”按钮）
  const needLogin = await page.$("a.header-login-btn");
  if (needLogin) {
    console.error("❌ Cookie 已失效，请更新！");
    await browser.close();
    process.exit(1); // 触发 GitHub Action failure → 发邮件
  }

  console.log("✅ 已登录，开始观看视频...");
  const watchTime = Math.floor(Math.random() * 5) + 1; // 随机 1~5 秒
  await page.waitForTimeout(watchTime * 1000);

  console.log(`🎬 观看 ${watchTime} 秒完成`);
  await browser.close();
})();