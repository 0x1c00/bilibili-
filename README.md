# surface
# Bilibili Auto Watch

一个 GitHub Action 脚本，每天自动打开指定 B 站视频观看 1~5 秒，用于保持活跃。  
如果 Cookie 失效，将通过邮件提醒你更新。

## 使用方法

### 1. Fork 本仓库
点击右上角 Fork，将项目复制到你自己的 GitHub。

### 2. 配置 Secrets
进入你的仓库 → `Settings` → `Secrets and variables` → `Actions` → `New repository secret`，添加：

- `BILI_COOKIES`  
  B 站登录 Cookie JSON（至少包含 `SESSDATA`、`bili_jct`、`DedeUserID`）

- `MAIL_USERNAME`  
  发件邮箱（QQ / 163 / Gmail / Outlook 等）

- `MAIL_PASSWORD`  
  邮箱授权码（不是登录密码）

### 3. 邮箱 SMTP 配置示例

| 邮箱服务   | SMTP 地址        | 端口 | 备注 |
|------------|----------------|------|------|
| QQ 邮箱    | smtp.qq.com     | 465  | 需开通 POP3/SMTP 服务并使用授权码 |
| 163 邮箱   | smtp.163.com    | 465  | 开启 SMTP 并使用授权码 |
| Gmail      | smtp.gmail.com  | 465  | 开启两步验证，并使用应用专用密码 |
| Outlook    | smtp.office365.com | 587 | 开启 SMTP，使用应用密码或微软账号密码 |

### 4. 触发工作流
- 默认每天定时运行（北京时间 18:00）。  
- 可以在仓库 → `Actions` → `Auto Watch Bilibili Video` → `Run workflow` 手动触发。

### 5. Cookie 更新提醒
- 脚本检测到 Cookie 失效，会自动发邮件提醒。  
- 收到邮件后更新 `BILI_COOKIES` 即可。

---

## ⚠️ 注意事项
1. 本项目仅供学习研究，请勿滥用。  
2. Cookie 可能随 B 站风控策略过期，需要定期更新。  
3. GitHub Actions 每月有免费额度，请注意用量。
